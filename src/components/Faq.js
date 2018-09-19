import React, { Component } from "react";
import { Header, Segment, List, Responsive } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Faq = ({ mobile }) => (
  <Segment vertical style={{ padding: mobile ? "0em 0em" : "7em 12em" }}>
    <Header textAlign="center" style={{ fontSize: mobile ? "1.6em" : "2.3em" }}>
      Frequently Asked Questions
    </Header>
    <List style={{ fontSize: mobile ? "1.19em" : "1.3em" }}>
      <List.Item style={{ padding: "1em 0em" }}>
        <List.Content>
          <List.Header>1. Question one goes here...?</List.Header>
          <List.Description
            style={{ padding: mobile ? "0em 0em" : "0.2em 1em" }}
          >
            Answer for question one goes here...
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item style={{ padding: "1em 0em" }}>
        <List.Content>
          <List.Header>2. Question two goes here...?</List.Header>
          <List.Description
            style={{ padding: mobile ? "0em 0em" : "0.2em 1em" }}
          >
            Answer for question two goes here...
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item style={{ padding: "1em 0em" }}>
        <List.Content>
          <List.Header>3. Question three goes here...?</List.Header>
          <List.Description
            style={{ padding: mobile ? "0em 0em" : "0.2em 1em" }}
          >
            Answer for question three goes here...
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item style={{ padding: "1em 0em" }}>
        <List.Content>
          <List.Header>4. Question four goes here...?</List.Header>
          <List.Description
            style={{ padding: mobile ? "0em 0em" : "0.2em 1em" }}
          >
            Answer for question four goes here...
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Segment>
);

export default class FAQ extends Component {
  render() {
    return (
      <div>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Faq />
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Faq mobile />
        </Responsive>
      </div>
    );
  }
}
