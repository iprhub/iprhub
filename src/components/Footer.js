import React from "react";
import { Container, Grid, List, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <Segment inverted color="black" vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <List link inverted>
              <List.Item>
                <Link to="/about">About Us</Link>
              </List.Item>
              <List.Item>
                <Link to="/contact">Contact Us</Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List link inverted>
              <List.Item>
                <Link to="/tnc">Terms and Conditions</Link>
              </List.Item>
              <List.Item>
                <Link to="/privacy">Privacy Policy</Link>
              </List.Item>

              <List.Item>
                <Link to="/faq">FAQ</Link>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <p> © 2018, IPRHub</p>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
