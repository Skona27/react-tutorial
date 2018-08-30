import React, { Component } from 'react';
import "./Recipe.css";

class Recipe extends Component {
    render() {
        const {title, img, instruction} = this.props;
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ));
        return (
            <div className="card">
                <div className="card__header">
                    <img className="card__img" src={img} alt={title} />
                </div>
                <div className="card__body">
                    <h3 className="card__title">{title}</h3>
                    <h4 className="card__bold">Ingredients: </h4>
                    <ul className="card__list">{ingredients}</ul>
                    <h4 className="card__bold">Instructions: </h4>
                    <p className="card__text">{instruction}</p>
                </div>
            </div>
        );
    }
}

export default Recipe