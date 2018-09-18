import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomepageLayout from "./HomepageLayout";
import ResponsiveContainer from "./HeaderComponent";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./Faq";
import TermsAndConditions from "./TermsAndConditions";

class App extends Component {
  render() {
    return (
      <Router>
        <ResponsiveContainer>
          <div>
            <Route exact path="/" component={HomepageLayout} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/faq" component={FAQ} />
            <Route path="/tnc" component={TermsAndConditions} />
          </div>
        </ResponsiveContainer>
      </Router>
    );
  }
}

export default App;
