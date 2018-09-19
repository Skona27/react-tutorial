import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <header className="header">
                <h2>Recipe App</h2>
                <nav className="header__nav">
                    <li className="header__item"><a onClick={this.props.onNewRecipe} className="header__link">New Recipe</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar;