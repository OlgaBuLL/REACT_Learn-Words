import React, { useState, useRef, useEffect } from "react";

import stylesCard from "../../assets/styles/card.module.scss";
import words from "../../assets/scripts/vocabulary";

import prev from "../../assets/images/left-arrow.png";
import next from "../../assets/images/right-arrow.png";

function ShowCard() {
  const [index, setIndex] = useState(0);
  const word = words[index];
  const [counter, setTotalCount] = useState(1);

  const [learnedWords, setlearnedWords] = useState(0);
  const [viewCard, setViewCard] = useState(false);

  // NEXT card
  const NextCard = () => {
    if (pressed) handleTranslate();
    setViewCard(false);

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
    setViewCard(false);

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
    if (viewCard === false) {
      setViewCard(!viewCard);
      setlearnedWords(learnedWords + 1);
    }
  };

  // фокус на кнопке
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  // отрисовка компонента
  return (
    <>
      <div className="showCard">
        <img
          className={`arrow ${pressedPrevArrow}`}
          onClick={PrevCard}
          src={prev}
          alt="Previous card"
        />

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
              <button ref={ref}>Translate</button>
            )}
          </div>
          <p onClick={handleLearned}>I know this word</p>
        </div>

        <img
          className={`arrow ${pressedNextArrow}`}
          onClick={NextCard}
          src={next}
          alt="Next card"
        />
      </div>
      <div className="total-words">{counter + "/" + words.length}</div>
      <div className="learnedWords">
        <p>Learned words: </p> <span className="count"> {learnedWords}</span>
      </div>
    </>
  );
}

export default ShowCard;
