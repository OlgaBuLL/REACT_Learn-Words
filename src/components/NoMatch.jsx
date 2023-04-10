import { Link } from "react-router-dom";

export default function Error(props) {
  return (
    <div className="error">
      {" "}
      <p>Wrong way!</p>
      <p>error </p>
      <h2 className="error-404">404</h2>
      <p> I don't know what u r looking for here</p>
      <p>
        It's better to go
        <Link to="/REACT_Learn-Words">
          <span className="home"> home</span>{" "}
        </Link>
      </p>
    </div>
  );
}
