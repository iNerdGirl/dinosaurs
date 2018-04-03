import React, { Component } from "react";
import "./Header.css";
import logo from "./g-dino.png";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" />
      </header>
    );
  }
}

export default Header;
