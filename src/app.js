import React from "react";
import React, { Component } from "react";

import DogCard from "./components/DogCard";
import Nav from "./components/Nav";
import Game from "./components/Game";
import dogs from "./dogs.json";



//things need to do for game to work. cl

class App extends Component {
  
    state = {
      dogs
    };

removeDog = id =>  {



};

    render() {
        return (
          
        <Nav />
        <Game>
        {this.state.dogs.map(dog) => (
                <DogCard
                  
                />
            ))}
        </Game>
        
    );
}
    
}    
    export default App;