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
    message: ""
  };

  resetGame = () => {
    this.shuffleCards(this.state.characters);
    this.setState({
      clickedCharactersId: [],
      score: 0,
      message: "Click any image to begin"
    });
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

  handleClick = (id) => {
    //losing conditional logic
    if(this.state.clickedCharactersId.includes(id)) {
        alert("You lose!");
        this.resetGame();
        return;
    };
    //push id into clickedCharactersId array state if not already clicked
    this.setState({
      clickedCharactersId: [...this.state.clickedCharactersId, id],
      score: this.state.score + 1
    });
    //winning conditional logic
    if(this.state.score === 11) {
      alert("you win!");
      this.resetGame();
      return;
    }
    //shuffle cards
    this.shuffleCards(this.state.characters);
  };

  render() {
    return (
      <div className="body">
        <Header />
        <Wrapper>
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
