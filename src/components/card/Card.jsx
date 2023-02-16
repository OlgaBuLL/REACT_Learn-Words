import React, { useState } from "react";
import "../../App.scss";
import stylesCard from "../../assets/styles/card.module.scss";

function Card(props) {
  const { english, transcription, tags, russian } = props;

  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  let translation;
  if (pressed) {
    translation = "translation";
  }

  return (
    <div className={stylesCard.card}>
      <p className={stylesCard.english}>{english}</p>
      <div className={stylesCard.transcription}>
        <p>transcription:</p>
        <p>{transcription}</p>
      </div>

      <div className={stylesCard.topic}>
        <p>topic:</p>
        <p>{tags}</p>
      </div>
      <button className={`${translation}`} onClick={handleChange}>
        {pressed ? (
          <p>
            <b>{russian}</b>
          </p>
        ) : (
          "Translate"
        )}
      </button>
    </div>
  );
}

export default Card;
