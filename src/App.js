import React from "react";
import logo from "./assets/images/learn.png";
import "./App.scss";
// import "./assets/styles/style.module.scss";
import LearnWord from "./components/vocabulary.jsx";
import words from "./assets/scripts/vocabulary.js";
import email from "./assets/images/envelope.png";
import telegram from "./assets/images/telegram.png";
import btnUp from "./assets/images/btn-up.png";
// import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learn Words</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Game</a>
        </nav>
      </header>
      <div className="content">
        <div className="cards-container">
          <table>
            <thead className="table-head">
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
                  isSelected={word.isSelected}
                ></LearnWord>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="footer">
        <div class="contacts">
          <p>CONTACTS</p>
          <div>
            <div>
              <a href="https://t.me/bio_ol23">
                <img className="icon" src={telegram} alt="Telegram" />
              </a>
            </div>
            <div>
              <a href="mailto:oska43@mail.ru">
                <img className="icon" src={email} alt="Email" />
              </a>
            </div>
          </div>
        </div>

        <div class="rights">
          <h2> Learn Words</h2>
          <div>&copy; All rights reserved</div>
          <div>2023</div>
          <div>
            Icons made by
            <a href="https://www.freepik.com" title="Freepik">
              {" "}
              Freepik
            </a>
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </div>
        </div>
        <div class="btn-up btn-up2">
          <img src={btnUp}></img>
        </div>
      </footer>
    </div>
  );
}

export default App;
