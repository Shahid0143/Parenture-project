import React from "react";
import Hamburger from "hamburger-react";
import "../styles/Navbar.css";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import vector from "../assets/Vector.png";

function Navbar() {
  return (
    <div className="nav-box">
      <ul>
        <li className="hum-box">
          <Hamburger />
        </li>
        <div className="img-text-box">
          <li className="img-size">
            <img src={vector} alt="Logo" />
          </li>
          <li className="txt-size">
            <h4>parenture</h4>
          </li>
        </div>
        <div className="icon-box">
          <li>
            <CiSearch size={30} />
          </li>
          <li>
            <IoMdNotificationsOutline size={30} />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
