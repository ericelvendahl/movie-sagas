import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Details from "../Details/Details";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="theme">
        I am App. Hear me roar.
        <Router>
          <Link to="/">Home</Link>
          {/* <Route exact path="/" component={Welcome} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;
