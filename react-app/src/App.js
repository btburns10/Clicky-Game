import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import characters from "./characters.json";

class App extends Component {
  //setting initial state
  state = {
    characters: characters,
    clickedCharacters: [],
    score: 0,
    highScore: 0,
    message: ""
  };

  handleClick = (id) => {
    console.log(id);
  };
  // Map over this.state.friends and render a CharacterCard component for each character object
  render() {
    return (
        <Wrapper>
        <Header />
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
    );
  }

}
 
 

export default App;
