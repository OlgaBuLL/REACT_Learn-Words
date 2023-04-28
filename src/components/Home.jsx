import { Link } from "react-router-dom";

import abc from "../assets/images/abc.svg";

export default function Home() {
  return (
    <div className="home-page">
      <div>
        <h2>
          Learn new vocabulary with <span className="title">"Learn Words"</span>{" "}
          App
        </h2>
        <div>
          You can choose to see the whole{" "}
          <Link to="/vocabulary">
            <span className="home"> list of words</span>{" "}
          </Link>
          or to play{" "}
          <Link to="/game">
            <span className="home">game</span>{" "}
          </Link>
          and <br /> add{" "}
          <Link to="/favourites">
            <span className="home">favourite words</span>
          </Link>
          <h3>Have fun!</h3>
        </div>
      </div>
      <img src={abc} alt="Logo"></img>
    </div>
  );
}
