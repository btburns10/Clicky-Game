import React from "react";
import "./Header.css";

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" class="brand-logo center">Clicky Game</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="badges.html">Components</a></li>
        <li class="active"><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
);

  // <div className="title">
  //         <h1>Clicky Game</h1>
  //       </div>
  //       <div className="subtitles">
  //         <div>
  //           <p>Score</p>
  //         </div>
  //         <div>
  //           <p>Restart</p>
  //         </div>
  //       </div>

export default Header;