import React from "react";

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <h1 className="brand-logo center">Clicky Game</h1>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><p>Score</p></li>
        <li><p>Restart</p></li>
      </ul>
    </div>
  </nav>
);

export default Header;