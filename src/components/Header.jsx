import logo from "../assets/images/learn.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="Logo" />
      <h1>Learn Words</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#game">Game</a>
      </nav>
    </header>
  );
}
