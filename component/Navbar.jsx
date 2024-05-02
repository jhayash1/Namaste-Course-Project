import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./constants/UserContext";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const [btn, setBtn] = useState(true);
  const handle = () => {
    setBtn(!btn);
  };
  //Context-api
  const { logginUser } = useContext(UserContext);
  // console.log(logginUser)

  // Redux -- useSelector
  const cartItems = useSelector((store) => store.cart.items);
  // Redux -- useSelector
  return (
    <div className="flex justify-between p-5 px-10 shadow-2xl fixed w-full bg-white top-0 z-10">
      <div>Restaurant</div>
      <div>
        <ul className="flex gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>{cartItems.length}</Link>
          </li>
          <button onClick={handle}>{btn ? "Login" : "Logout"}</button>
          <li className="font-bold">{logginUser}</li>
        </ul>
      </div>
    </div>
  );
};
