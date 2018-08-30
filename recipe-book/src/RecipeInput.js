import React, { Component } from 'react';
import "./RecipeInput.css";

class RecipeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            ingredients: [],
            img: ''
        };
    }
    render() {
        return <div></div>
    }
}

export default RecipeInput;