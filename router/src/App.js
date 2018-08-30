import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import ParamsExample from "./ParamsExample";

const Home = () => (
  <div>
    <h1>I'M HUNGRY</h1>
    <iframe
      src="https://giphy.com/embed/pBj0EoGSYjGms"
      width="480"
      height="288"
    />
  </div>
);

const Eat = () => (
  <div>
    <h1>NOM NOM NOM</h1>
    <iframe
      src="https://giphy.com/embed/VvQvOFqPjZLi"
      width="480"
      height="480"
    />
    <p>So tasty!</p>
  </div>
);

const Drink = () => (
  <div>
    <h1>SO REFRESHING</h1>
    <iframe
      src="https://giphy.com/embed/DbD6EnlEQmjTi"
      width="480"
      height="461"
    />
  </div>
);

const App = () => (
  <div className="App">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/eat">Eat</Link>
      </li>
      <li>
        <Link to="/drink">Drink</Link>
      </li>
      <li>
        <Link to="/name">Params</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/eat" component={Eat} />
      <Route path="/drink" component={Drink} />
      <Route path="/name" component={ParamsExample} />
    </Switch>
  </div>
);

export default App;