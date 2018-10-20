import React from "react";
import Modal from "react-modal";
import "./Header.css";

//modal styling
const customStyle = {

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  content: {
    fontSize: 30,
    fontFamily: 'Sigmar One',
    top                   : '50%',
    left                  : '50',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(25%, -50%)'
  }
};

class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      isActive: false
    }
  };

  componentWillMount() {
    Modal.setAppElement('body');
  };

  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">Space Jam <img src="/images/space-jam-logo.png" alt="space-jam"></img> Clicky Game</a>
          <ul className="left hide-on-med-and-down">
            <li className="active"><span onClick={this.toggleModal}>How To Play?</span></li>
            <Modal isOpen={this.state.isActive} style={customStyle}>
              <p>The goal of this game is to click all 12 of the character cards.</p>  
              <p>The tricky part - You can not click on any card twice!</p>
              <button onClick={this.toggleModal} className="btn">Ok Got It!</button>
            </Modal>
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