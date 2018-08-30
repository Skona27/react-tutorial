import React, { Component } from 'react';
import './App.css';

const Box = ({color}) => {
  const style = {
    width: '150px',
    height: '150px',
    margin: '3px',
    display: 'inline-block',
    backgroundColor: color
  }

  return <div style={style} />
}

class App extends Component {
  
  constructor(props) {
    super(props);

    const boxes = Array(66).fill().map(this.randomColor, this);
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
    return Math.floor(Math.random() * 100) + 155;
  }
 
  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));

    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

export default App;
