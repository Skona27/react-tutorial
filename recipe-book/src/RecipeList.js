import React, {Component} from "react";
import Recipe from "./Recipe";
import "./RecipeList.css";

class RecipeList extends Component {
    render() {
        const recipes = this.props.recipes.map((recipe) => (
            <Recipe key={recipe.id} {...recipe} />
        ));

        return (
            <div className="recipes">
                {recipes}
            </div>
        )
    }
}

export default RecipeList