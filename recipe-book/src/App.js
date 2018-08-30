import React, { Component } from 'react';
import './App.css';
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
            id: 1,
            title: "Spaghetti Bolognese",
            instruction: "Mix all ingredients!",
            ingredients: ["pasta", "sos", "pepper"],
            img: "spaghetti.jpg"
        },
        {
            id: 2,
            title: "Spaghetti Carbonara",
            instruction: "Mix all ingredients!",
            ingredients: ["pasta", "sos", "bacon"],
            img: "spaghetti.jpg"
        },
        { 
            id: 3,
            title: "French Fries",
            instruction: "Mix all ingredients!",
            ingredients: ["potatoes", "oil"],
            img: "spaghetti.jpg"
        }
      ],
      nextId: 4
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
