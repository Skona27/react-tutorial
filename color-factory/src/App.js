import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// As a user, I can go to /colors to see a list of all available colors.
// As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory. (The route here should be /colors/:color.)
// As a user, I can click on a button to show a form that will let me add a new color. (The route here should be /colors/new)
// As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.
// As a user, if I try to navigate to a color page that does not exist (e.g. /colors/burrito), I am redirected to the colors index page.
// As a user, if I try to navigate to an invalid url (e.g. /this-is-not-valid), I am redirected to the colors index page.


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
