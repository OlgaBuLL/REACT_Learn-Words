import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header.jsx";
import TableMap from "./components/table/TableMap.jsx";
import Game from "./components/card/Game.jsx";
import Footer from "./components/Footer";
import Error from "./components/NoMatch";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <main>
            <Suspense fallback={<div>Loading...</div>} />
            <Routes>
              <Route exact path="/" element={<TableMap />} />
              <Route path="/game" element={<Game />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <hr className="footer-line"></hr>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
