import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomepageLayout from "./HomepageLayout";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./Faq";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import Footer from "./Footer";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />

          <Route exact path="/" component={HomepageLayout} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/tnc" component={TermsAndConditions} />
          <Route path="/privacy" component={PrivacyPolicy} />

          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
