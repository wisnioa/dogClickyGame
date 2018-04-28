
import React, { Component } from "react";

import DogCard from "./components/DogCard";
import Nav from "./components/Nav";
import Game from "./components/Game";
import dogs from "./dogs.json";





class App extends Component {
  
    state = {
      dogs,
      clicked: false,
      score: 0
    };


    componentDidMount() {
        this.setState({ dogs: this.shuffleDogs(this.state.dogs) });
      }

    shuffleDogs = dogs => {
        let i = dogs.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = dogs[i];
          dogs[i] = dogs[j];
          dogs[j] = temp;
          i--;
        }
        return dogs;
      };


      handleCorrectGuess = newData => {
        const score = this.state.score;
        const newScore = score + 1;
        this.setState({
          dogs: this.shuffleDogs(newData),
          score: newScore,
          
        });
        console.log(newScore);
      };
    
      handleIncorrectGuess = data => {
        this.setState({
          dogs: this.resetData(data),
          score: 0
        });
      };

      resetData = dogs => {
        const resetData = dogs.map(item => ({ ...item, clicked: false }));
        return this.shuffleDogs(resetData);
      };
      
      handleItemClick = id => {
        let guessedCorrectly = false;
     
        const newData = this.state.dogs.map(item => {
          const newItem = { ...item };
          if (newItem.id === item.id) {
            if (!newItem.clicked) {
              newItem.clicked = true;
              guessedCorrectly = true;
              console.log("this is clicked item");
              console.log(newItem.clicked);
            }
          }
          return newItem;
        
        })
        guessedCorrectly
          ? this.handleCorrectGuess(newData)
          : this.handleIncorrectGuess(newData);
      };
      

    render() {
        return (
    <div>
        <Nav
        score={this.state.score} 
        />

        <Game>
        {this.state.dogs.map(dog => (
                <DogCard
                key={dog.id}
                id={dog.id}
                score={this.state.score}
                handleClick={this.handleItemClick}
                image={dog.image}
              />
            ))}
          </Game>
        
        </div>
      );
    }
  }
    export default App;