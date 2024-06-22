import { useEffect, useState } from "react";
import { LOGO_URL, DROPDOWN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  useEffect(() => {
    console.log("useeffect called");
  }, [btnName]);

  return (
    <div id="header">
      <div id="logo-address">
        <img id="logo" src={LOGO_URL}></img>
        <div id="location">
          <p id="other">
            <b>Other</b>
          </p>
          <p>
            791111
            <img id="dropdown-image" src={DROPDOWN_URL}></img>
          </p>
        </div>
      </div>
      <div id="nav-items">
        <ul id="child-of-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">AboutUS</Link>
          </li>
          <li>
            <Link to="/contactus">ContactUs</Link>
          </li>

          <li>Cart</li>
          <li>
            <button
              id="login"
              onClick={() => {
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
