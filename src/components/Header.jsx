import React from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SelectLanguage from "./selection/Selection";
import { TranslationContext } from "../context/WordContextProvider";

import logo from "../assets/images/abc-dark.svg";

export default function Header({ setWords }) {
  const word = React.useContext(TranslationContext);
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/REACT_Learn-Words">
        <img src={logo} className="App-logo" alt="Logo" />
      </Link>
      <h1 className="title">Learn Words</h1>
      <nav>
        <ul>
          <li>
            <Link to="/REACT_Learn-Words">{word.home}</Link>
          </li>
          <li>
            <Link to="/vocabulary">{word.vocabulary}</Link>
          </li>
          <li>
            <Link to="/game">{word.game}</Link>
          </li>
          <li>
            <Link to="/favourites">{word.favourites}</Link>
          </li>
          <li>
            {" "}
            <SelectLanguage onWordSelect={setWords} />
          </li>
        </ul>
      </nav>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </motion.header>
  );
}
