import React from "react";
import Logo from "../composants/Logo";
import Apropos from "../composants/Apropos";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <Logo />
      <Apropos />
    </header>
  );
};

export default Header;
