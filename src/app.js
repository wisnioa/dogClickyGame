import React from "react";
import React, { Component } from "react";

import DogCard from "./components/DogCard";
import Nav from "./components/Nav";
import Game from "./components/Game";
import dogs from "./dogs.json";



//Checklist---things need to do for game to work/finish 
// 1.randomize of cards function
// 2. handle points increment (when different dog clicked, else no points)
// 3. handle total points logic (when user wins so many in a row, else user doesnt
// get points)
// 4.Add some CSS if I am feeling fancy




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