import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <header className="header">
                <h2>Recipe App</h2>
                <nav className="header__nav">
                    <li className="header__item"><a href="#" className="header__link">Home</a></li>
                    <li className="header__item"><a href="#" className="header__link">About</a></li>
                    <li className="header__item"><a href="#" className="header__link">More</a></li>
                    <li className="header__item"><a href="#" className="header__link">Contact</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar;