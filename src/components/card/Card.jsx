import React, { useState } from "react";

import stylesCard from "../../assets/styles/card.module.scss";

function Card(props) {
  const { english, transcription, russian } = props;

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
      <p className={stylesCard.transcription}>{transcription}</p>
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
