import React from 'react'
import Hamburger from "hamburger-react";
import "../App.css"
// import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <div className="nav-box">
      <ul>
        <li>
          <Hamburger />
        </li>
        <li>parenture</li>
       
       
      </ul>
    </div>
  );
}

export default Navbar