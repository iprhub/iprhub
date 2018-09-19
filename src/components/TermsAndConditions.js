import React, { Component } from "react";
import { Header, Segment, Responsive } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const TnC = ({ mobile }) => (
  <Segment
    vertical
    style={{
      minHeight: mobile ? 500 : 700,
      padding: mobile ? "0em 0em" : "7em 12em"
    }}
  >
    <Header textAlign="center" style={{ fontSize: mobile ? "1.6em" : "2.3em" }}>
      Terms And Conditions
    </Header>
    <container text style={{ fontSize: mobile ? "1.1em" : "1.3em" }}>
      Terms and Conditions goes here in a text container...
    </container>
  </Segment>
);

export default class TermsAndConditions extends Component {
  render() {
    return (
      <div>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <TnC />
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <TnC mobile />
        </Responsive>
      </div>
    );
  }
}
