import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET from "../../redux/GET";
import { getWordsCollection } from "../../redux/actions";
// import words from "../../assets/scripts/vocabulary";

import { motion } from "framer-motion";
import stylesCard from "../../assets/styles/card.module.scss";
import prev from "../../assets/images/left-arrow.png";
import next from "../../assets/images/right-arrow.png";

function ShowCard() {
  const words = useSelector((state) => state);
  const [index, setIndex] = useState(0);
  const word = words[index];
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      const data = await GET.getWordsCollection();
      dispatch(getWordsCollection(data));
    }
    get();
  }, [dispatch, words]);

  const [counter, setTotalCount] = useState(1);

  const [learnedWordsIndex, setlearnedWordsIndex] = useState(0);
  const [learnedWords, setLearnedWords] = useState([]);

  // NEXT card
  const NextCard = () => {
    if (pressed) handleTranslate();

    if (index + 1 >= words.length) {
      setIndex(0);
      //общее количество слов
      setTotalCount(1);
    } else {
      setIndex(index + 1);
      //номер предыдущей карточки
      setTotalCount(counter + 1);
    }
    setNextClick(!clickedNext);
  };

  const [clickedNext, setNextClick] = useState(false);

  let pressedNextArrow;
  if (clickedNext) {
    pressedNextArrow = "active";
  }

  // PREV card
  const PrevCard = () => {
    if (pressed) handleTranslate();

    if (index - 1 < 0) {
      setIndex(words.length - 1);
      //общее количество слов
      setTotalCount(words.length);
    } else {
      setIndex(index - 1);
      //номер предыдущей карточки
      setTotalCount(counter - 1);
    }

    setPrevClick(!clickedPrev);
  };

  const [clickedPrev, setPrevClick] = useState(false);

  let pressedPrevArrow;
  if (clickedPrev) {
    pressedPrevArrow = "active";
  }

  //перевод слова
  const [pressed, setPressed] = useState(false);

  const handleTranslate = () => {
    setPressed(!pressed);
  };

  let translation;
  if (pressed) {
    translation = "translation";
  }

  //счетчик выученных слов
  const handleLearned = () => {
    if (!learnedWords.includes(word)) {
      learnedWords.push(word);
      setlearnedWordsIndex(learnedWordsIndex + 1);
    }
  };

  // фокус на кнопке
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, [word]);

  // отрисовка компонента
  return (
    <div>
      <div className="showCard">
        <motion.div
          initial={{ opacity: 0.2, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            duration: 3,
          }}
        >
          <img
            className={`arrow ${pressedPrevArrow}`}
            onClick={PrevCard}
            src={prev}
            alt="Previous card"
          />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <div className={stylesCard.card} {...index}>
            <p className={stylesCard.english}>{word.english}</p>
            <p className={stylesCard.transcription}>{word.transcription}</p>
            <div onClick={handleTranslate}>
              {" "}
              {pressed ? (
                <p className={`${translation}`}>
                  <b>{word.russian}</b>
                </p>
              ) : (
                <button className="game-btn" ref={ref}>
                  Translate
                </button>
              )}
            </div>
            <p onClick={handleLearned}>I know this word</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.2, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            duration: 3,
          }}
        >
          <img
            className={`arrow ${pressedNextArrow}`}
            onClick={NextCard}
            src={next}
            alt="Next card"
          />
        </motion.div>
      </div>

      <div className="total-words">{counter + "/" + words.length}</div>
      <motion.div
        initial={{ opacity: 0.2, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          duration: 3,
        }}
      >
        <div className="learnedWords">
          <p>Learned words: </p>{" "}
          <span className="count"> {learnedWordsIndex}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default ShowCard;
