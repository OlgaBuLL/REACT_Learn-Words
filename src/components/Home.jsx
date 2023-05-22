import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import abc from "../assets/images/abc.svg";

export default function Home() {
  return (
    <div className="home-page">
      <motion.div
        initial={{ opacity: 0.2, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          duration: 4,
        }}
      >
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
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <img src={abc} alt="Logo"></img>
      </motion.div>
    </div>
  );
}
