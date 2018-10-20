import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  //setting initial state
  state = {
    characters: characters,
    clickedCharactersId: [],
    score: 0,
    highScore: 0,
    message: "Click an image to begin!",
    shake: ""
  };

  resetGame = () => {
    this.setState({
      clickedCharactersId: [],
      score: 0,
      highScore: this.state.score > this.state.highScore ? this.state.score : this.state.highScore,
      message: "Click an image to begin!",
      shake: ""
    });
    this.shuffleCards(this.state.characters);
  };

  shuffleCards = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return this.setState({
      characters: array
    });
  }

  handleWin = () => {
    this.setState({
      clickedCharactersId: [],
      score: 0,
      highScore: 12,
      message: "Congratulations, You Win!"
    });
    setTimeout(this.resetGame, 4000);
  };

  handleLoss = () => {
    this.setState({
      message: "Incorrect!",
      shake: "shake"
    });
    setTimeout(this.resetGame, 2500);
  };

  handleClick = (id) => {
    //losing conditional logic
    if(this.state.clickedCharactersId.includes(id)) {
        this.handleLoss();
        return;
    };
    //correct guess logic
    this.setState({
      clickedCharactersId: [...this.state.clickedCharactersId, id],
      score: this.state.score + 1,
      message: "Correct!"
    });
    //winning conditional logic
    if(this.state.score === 11) {
      this.handleWin();
      return;
    }
    //shuffle cards
    this.shuffleCards(this.state.characters);
  };

  render() {
    return (
      <div className="body">
        <Header 
          score={this.state.score} 
          highScore={this.state.highScore}
          message={this.state.message}/>
        <Wrapper className={this.state.shake}>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }

}
 
 

export default App;
