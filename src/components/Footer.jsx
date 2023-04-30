import { motion } from "framer-motion";
import email from "../assets/images/envelope.png";
import telegram from "../assets/images/telegram.png";
import btnUp from "../assets/images/btn-up.png";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contacts">
        <p>CONTACTS</p>
        <div>
          <div>
            <a href="https://t.me/bio_ol23">
              <img className="footer-icon icon" src={telegram} alt={telegram} />
            </a>
          </div>
          <div>
            <a href="mailto:oska43@mail.ru">
              <img className="footer-icon icon" src={email} alt={email} />
            </a>
          </div>
        </div>
      </div>

      <div className="rights">
        <h2> Learn Words</h2>
        <div>&copy; All rights reserved</div>
        <div>2023</div>
        <div>
          Icons made by
          <a href="https://www.freepik.com" title="Freepik">
            {" "}
            Freepik
          </a>{" "}
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </div>
      </div>
      <div className="btn-up btn-up2">
        <img src={btnUp} alt="to top"></img>
      </div>
    </motion.footer>
  );
}
