import React, { Component } from "react";
import { Grid, Header, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class About extends Component {
  render() {
    return (
      <div style={{ minHeight: 700, padding: "8em 0em" }}>
        <Grid stackable container>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2" textAlign="left">
                About Us
              </Header>
              <Divider />
              <p style={{ fontSize: "1.33em" }}>
                We are a group of people, who are working 100% to bring lawyers
                and inventors on one platform to make their work easier for both
                the parties, while minimizing the costs due to third parties...
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
