import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
