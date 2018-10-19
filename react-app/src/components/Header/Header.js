import React from "react";
import "./Header.css";

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo center">Space Jam <img src="/images/space-jam-logo.png" alt="space-jam"></img> Clicky Game</a>
      <ul className="left hide-on-med-and-down">
        <li className="active"><a href="collapsible.html">How To Play?</a></li>
      </ul>
      <ul className="right hide-on-med-and-down">
        <li><a href="badges.html">Score: 0</a></li>
        <li className="active"><a href="collapsible.html">Highscore: 0</a></li>
      </ul>
    </div>
  </nav>
);

export default Header;