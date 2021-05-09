import React from "react";
import "./Header.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Header() {
  return (
    <div className="header">
      <h1 className="header_icon">ueno.</h1>
      <div className="header_right">
        <span>SERVICES</span>
        <span>CLIENTS</span>
        <span>CAREERS</span>
        <span>ABOUT</span>
        <span className="contact">CONTACT</span>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}

export default Header;
