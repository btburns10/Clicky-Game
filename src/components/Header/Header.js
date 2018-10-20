import React from "react";
import "./Header.css";

class Header extends React.Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">Space Jam <img src="/images/space-jam-logo.png" alt="space-jam"></img> Clicky Game</a>
          <ul className="left hide-on-med-and-down">
            <li className="active"><a onClick={this.toggleModal} href="collapsible.html">How To Play?</a></li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li><a href="badges.html">Score: {this.props.score}</a></li>
            <li className="active"><a href="collapsible.html">Highscore: {this.props.highScore}</a></li>
          </ul>
        </div>
        <div className="message-display">
          {this.props.message}
        </div>
      </nav>
    )
  }
};

export default Header;