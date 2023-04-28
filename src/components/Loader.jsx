import loading from "../assets/images/loading.png";
import "../assets/styles/context.module.scss";

export default function Loader() {
  return (
    <div className="context-container">
      <img src={loading} alt="Loading" />
      <p>Loading...</p>
    </div>
  );
}
