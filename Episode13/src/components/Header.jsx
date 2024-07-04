import { useState, useContext } from "react";
import { LOGO_URL, DROPDOWN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext1 from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const status = useOnlineStatus();

  const { loggedInUser } = useContext(userContext1);

  const cartItems = useSelector((store) => store.cart.items);

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
        <ul className="flex space-x-12 p-6">
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
          <li className="text-lg ">
            <Link to="/cart">Cart-{cartItems.length}</Link>
          </li>
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
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
