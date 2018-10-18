import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import characters from "./characters.json";

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
      message: ""
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
    console.log(this.state.clickedCharactersId);
    if(this.state.clickedCharactersId.includes(id)) {
  
        alert("You lose!");
        this.resetGame();
        return;
    };
    //push id into clickedCharactersId array state if not already clicked
    this.setState({
      clickedCharactersId: [...this.state.clickedCharactersId, id]
    });
  };

  render() {
    return (
      <div>
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
