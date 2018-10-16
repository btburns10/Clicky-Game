import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import characters from "./characters.json";

class App extends Component {
  //setting initial state to characters array
  state = {
    characters
  };

  // Map over this.state.friends and render a CharacterCard component for each character object
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
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}
 
 

export default App;
