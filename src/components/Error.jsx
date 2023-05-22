import error from "../assets/images/error.svg";
import "../assets/styles/context.module.scss";

export default function Error() {
  return (
    <div className="context-container">
      <img src={error} alt="Error" />
      <p>No connection to the server</p>
    </div>
  );
}
