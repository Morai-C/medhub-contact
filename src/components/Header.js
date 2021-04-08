import { useState } from "react";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "../../node_modules/@fortawesome/fontawesome-free-brands";

import Min from "./Min";
const Header = () => {
  const [togggle, setTogggle] = useState(false);
  return (
    <div>
      <header>
        <div className="socials">
          <div className="icons">
            <a href=".">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href=".">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href=".">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        {/* ---------------------------- */}
        <div className="main-header">
          <div href="." className="logo">
            <a href=".">logo</a>
            <div className="menu" onClick={() => setTogggle(!togggle)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact </a>
            </li>
            <li className="btn">
              <a href="/">Join</a>
            </li>
          </ul>
        </div>
        {/* -------------------- */}
        {togggle === true ? <Min /> : <></>}
      </header>
    </div>
  );
};

export default Header;
