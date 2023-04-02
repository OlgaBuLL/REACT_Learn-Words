import { Link } from "react-router-dom";

import abc from "../assets/images/abc.svg";

export default function Home(props) {
  return (
    <div className="error">
      <img src={abc} alt="Logo"></img>
      <h2>Learn new words with our App</h2>
      <p>
        You can choose to see the whole{" "}
        <Link to="/vocabulary">
          <span className="home"> list of words</span>{" "}
        </Link>
        or to play{" "}
        <Link to="/game">
          <span className="home">game</span>{" "}
        </Link>
        and add{" "}
        <Link to="/favourites">
          <span className="home">favourite </span> words
        </Link>
        <h3>Have fun!</h3>
      </p>
    </div>
  );
}
