import { Outlet, Link } from "react-router-dom";

import logo from "../assets/images/abc-dark.svg";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="Logo" />
      </Link>
      <h1>Learn Words</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vocabulary">Vocabulary</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </header>
  );
}
