import React, { Component } from 'react';
import './App.css';
import Box from "./Box";


class App extends Component { 
  constructor(props) {
    super(props);

    const boxes = Array(80).fill().map(this.randomColor, this);
    this.state = {boxes};

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const random = Math.floor(Math.random() * boxes.length);
      boxes[random] = this.randomColor();
      this.setState({boxes});
    }, 8);
  }

  randomColor() {
    var r = this.generateChannel();
    var g = this.generateChannel();
    var b = this.generateChannel();
    return "rgb("+r+", "+g+", "+b+")";
  }
  
  generateChannel() {
    return Math.floor(Math.random() * 255);
  }
 
  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));

    return (
      <div className="App">{boxes} </div>
    );
  }
}

export default App;
