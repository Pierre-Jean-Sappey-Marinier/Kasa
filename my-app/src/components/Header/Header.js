import React from "react";
import Logo from "../Logo/Logo";
import Apropos from "../Menu/Apropos";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <Logo />
      <Apropos />
    </header>
  );
};

export default Header;
