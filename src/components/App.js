import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomepageLayout from "./HomepageLayout";
import HeaderComponent from "./HeaderComponent";
import About from "./About";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <HeaderComponent /> */}
          <Route exact path="/" component={HomepageLayout} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;