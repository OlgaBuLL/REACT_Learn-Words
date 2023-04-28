import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { translation, TranslationContext } from "./context/WordContextProvider";

import { Apiwords } from "./context/Context";

import "./App.scss";

import Header from "./components/Header.jsx";
import Home from "./components/Home";
import TableMap from "./components/table/TableMap.jsx";
import Game from "./components/card/Game.jsx";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import ErrorNoNatch from "./components/NoMatch";

function App() {
  const [words, setWords] = useState("english");
  return (
    <Apiwords>
      <TranslationContext.Provider value={translation[words]}>
        <Router>
          <div className="App">
            <div className="container">
              <Header setWords={setWords} />

              <main>
                <Suspense fallback={<div>Loading...</div>} />
                <Routes>
                  <Route exact path="/REACT_Learn-Words" element={<Home />} />
                  <Route exact path="/vocabulary" element={<TableMap />} />
                  <Route exact path="/game" element={<Game />} />
                  <Route path="/favourites" element={<Favourites />} />
                  <Route path="*" element={<ErrorNoNatch />} />
                </Routes>
              </main>
              <hr className="footer-line"></hr>
              <Footer />
            </div>
          </div>
        </Router>
      </TranslationContext.Provider>
    </Apiwords>
  );
}

export default App;
