import React, { useState } from "react";
// import ShowCardMap from "./ShowCardMap";
import stylesCard from "../../assets/styles/card.module.scss";
import words from "../../assets/scripts/vocabulary";

function ShowCard() {
  // const { english, transcription, russian } = props;
  const [index, setIndex] = useState(0);
  let word = words[index];
  console.log(index);

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
    pressedNextArrow = "pressedNextArrow";
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
    pressedPrevArrow = " pressedPrevArrow";
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
      <button className={`${pressedPrevArrow}`} onClick={PrevCard}>
        Prev
      </button>
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
      <button className={`${pressedNextArrow}`} onClick={NextCard}>
        Next
      </button>
    </div>
  );
}

export default ShowCard;
