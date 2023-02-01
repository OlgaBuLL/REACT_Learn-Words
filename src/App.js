import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LearnWord from "./components/vocabulary";

const words = [
  {
    word: "work",
    transcription: "[wɜːrk]",
    topic: "work",
    partOfSpeech: "noun",
    translation: "работа",
  },
  {
    word: "food",
    transcription: "[fuːd]",
    topic: "food",
    partOfSpeech: "noun",
    translation: "еда",
  },
  {
    word: "travel",
    transcription: " [ˈtrævl]",
    topic: "travelling",
    partOfSpeech: "verb",
    translation: "путешествовать, ездить, ехать",
  },
  {
    word: "work",
    transcription: "[wɜːrk]",
    topic: "work",
    partOfSpeech: "noun",
    translation: "работа",
  },
  {
    word: "food",
    transcription: "[fuːd]",
    topic: "food",
    partOfSpeech: "noun",
    translation: "еда",
  },
  {
    word: "travel",
    transcription: " [ˈtrævl]",
    topic: "travelling",
    partOfSpeech: "verb",
    translation: "путешествовать, ездить, ехать",
  },
  {
    word: "work",
    transcription: "[wɜːrk]",
    topic: "work",
    partOfSpeech: "noun",
    translation: "работа",
  },
  {
    word: "food",
    transcription: "[fuːd]",
    topic: "food",
    partOfSpeech: "noun",
    translation: "еда",
  },
  {
    word: "travel",
    transcription: " [ˈtrævl]",
    topic: "travelling",
    partOfSpeech: "verb",
    translation: "путешествовать, ездить, ехать",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Vocabulary</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="content">
        <div className="cards-container">
          {words.map((word) => (
            <LearnWord
              word={word.word}
              transcription={word.transcription}
              topic={word.topic}
              partOfSpeech={word.partOfSpeech}
              translation={word.translation}
            ></LearnWord>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
