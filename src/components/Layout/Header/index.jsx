import React from "react";
const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src="/assets/images/logo.png" alt="logo" />
      <div className="header__name">
        <img
          className="header__name__avatar"
          src="/assets/images/615.jpg"
          alt="personal img"
        />
        <h2 className="header__name__title">Khaled Mohammed</h2>
      </div>
    </header>
  );
};

export default Header;
