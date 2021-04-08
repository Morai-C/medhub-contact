import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "../../node_modules/@fortawesome/fontawesome-free-brands";

const Min = () => {
  return (
    <div>
      <div className="min-content">
        <ul>
          <li>
            <a href=".">Home</a>
          </li>
          <li>
            <a href=".">About Us</a>
          </li>
          <li>
            <a href=".">Contact</a>
          </li>
          <li>
            <a href="." className="btn">
              Join
            </a>
          </li>
          <li className="socials">
            <a href=".">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href=".">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href=".">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Min;
