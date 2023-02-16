import React from "react";

import "./App.scss";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import stylesTable from "./assets/styles/vocabulary.module.scss";
import stylesCard from "./assets/styles/card.module.scss";
import LearnWord from "./components/vocabulary/Vocabulary.jsx";
import words from "./assets/scripts/vocabulary.js";

import Card from "./components/card/Card.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={stylesTable.content} id="home">
        <div className={stylesTable.container}>
          <table>
            <thead className={stylesTable.head}>
              <tr>
                <th>№</th>
                <th>Word</th>
                <th>Transcription</th>
                <th>Topic</th>
                <th>Translation</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {words.map((word, i) => (
                <LearnWord
                  key={i}
                  id={word.id}
                  english={word.english}
                  transcription={word.transcription}
                  tags={word.tags}
                  russian={word.russian}
                ></LearnWord>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
