import React from "react";

import "../../App.scss";
import stylesCard from "../../assets/styles/card.module.scss";
import Card from "./Card.jsx";
import words from "../../assets/scripts/vocabulary";

function CardMap() {
  return (
    <div className={stylesCard.container} id="game">
      {words.map((word, i) => (
        <Card
          key={i}
          english={word.english}
          transcription={word.transcription}
          tags={word.tags}
          russian={word.russian}
        ></Card>
      ))}
    </div>
  );
}

export default CardMap;
