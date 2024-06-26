import { useEffect, useState } from "react";
import { LOGO_URL, DROPDOWN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  useEffect(() => {
    console.log("useeffect called"); //when there is a change in value of btnName then useeffect is called
  }, [btnName]);

  const status = useOnlineStatus();

  return (
    <div className="flex justify-between border border-black">
      <div className="flex ml-7 mt-2">
        <img className="w-10 h-12" src={LOGO_URL}></img>
        <div className="flex mt-5 ml-28">
          <p className="mr-5">
            <b>Other</b>
          </p>
          <div className="flex">
            <p>791111</p>
            <img className="w-5 h-5 ml-1" src={DROPDOWN_URL}></img>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex space-x-20 p-6">
          <li>online status:{status ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">AboutUS</Link>
          </li>
          <li>
            <Link to="/contactus">ContactUs</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
