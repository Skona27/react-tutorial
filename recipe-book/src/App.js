import React, { Component } from 'react';
import './App.css';

import Navbar from "./Navbar";
import RecipeList from "./RecipeList";
import RecipeInput from "./RecipeInput";

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
      nextId: 4,
      showForm: false,
    };
    
    this.handleSave = this.handleSave.bind(this);
  }
  
  handleSave(recipe) {
   this.setState((prevState, props) => {
     const newRecipe = {...recipe, id: this.state.nextRecipeId};
     return {
       nextRecipeId: prevState.nextId + 1,
       recipes: [...this.state.recipes, newRecipe]
     }
   });
  }

  render() {
    const {showForm} = this.state;
    
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        {showForm ? <RecipeInput onSave={this.handleSave} onClose={() => this.setState({showForm: false})} /> : null}
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
