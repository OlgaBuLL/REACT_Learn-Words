import React, { useState } from "react";

import stylesCard from "../../assets/styles/card.module.scss";
import words from "../../assets/scripts/vocabulary";

import prev from "../../assets/images/left-arrow.png";
import next from "../../assets/images/right-arrow.png";

function ShowCard() {
  // const { english, transcription, russian } = props;
  const [index, setIndex] = useState(0);
  const word = words[index];
  // console.log(index);

  // NEXT card
  const NextCard = () => {
    if (index + 1 >= words.length) {
      setIndex(0);
    } else setIndex(index + 1);

    setNextClick(!clickedNext);
  };

  const [clickedNext, setNextClick] = useState(false);

  let pressedNextArrow;
  if (clickedNext) {
    pressedNextArrow = "active";
  }

  // PREV card
  const PrevCard = () => {
    if (index - 1 < 0) {
      setIndex(words.length - 1);
    } else setIndex(index - 1);

    setPrevClick(!clickedPrev);
  };

  const [clickedPrev, setPrevClick] = useState(false);

  let pressedPrevArrow;
  if (clickedPrev) {
    pressedPrevArrow = "active";
  }

  //перевод слова
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  let translation;
  if (pressed) {
    translation = "translation";
  }

  // отрисовка компонента
  return (
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
        <button className={`${translation}`} onClick={handleChange}>
          {pressed ? (
            <p>
              <b>{word.russian}</b>
            </p>
          ) : (
            "Translate"
          )}
        </button>
      </div>

      <img
        className={`arrow ${pressedNextArrow}`}
        onClick={NextCard}
        src={next}
        alt="Next card"
      />
    </div>
  );
}

export default ShowCard;
