import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <div style={{ minHeight: 700, padding: "8em 0em" }}>
        <Grid stackable container>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1" textAlign="center" style={{ fontSize: "2.3em" }}>
                Privacy Policy
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We take atmost care about our clients privacy. We don't sell
                your data to advertisers. Blah blah blah.....
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
