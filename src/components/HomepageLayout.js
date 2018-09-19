import PropTypes from "prop-types";
import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Responsive,
  Header,
  Icon,
  Image,
  Segment
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const HomepageHeading = ({ mobile }) => (
  <Grid container stackable>
    <Grid.Row>
      <Grid.Column width={8}>
        <Container textAlign="left">
          <Header
            as="h1"
            content="IPR Hub"
            style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "2.5em" : "4em"
            }}
          />

          <Header
            as="h2"
            content="Where Inventers gets their legal work done at a ease..."
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em"
            }}
          />
          <Button positive primary size="huge">
            Get Started
            <Icon name="right arrow" />
          </Button>
        </Container>
      </Grid.Column>
      <Grid.Column floated="right" width={6} style={{ marginTop: "5em" }}>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Image
            size="large"
            src="https://i.pinimg.com/originals/8d/9a/2f/8d9a2fa4913f3ce2f418f19c2ea90bf2.jpg"
          />
        </Responsive>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

const HomepageLayout = () => (
  <div>
    <Segment style={{ minHeight: 700, padding: "1em 0em" }} vertical>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <HomepageHeading />
      </Responsive>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <HomepageHeading mobile />
      </Responsive>
    </Segment>
    {/* <Segment style={{ minHeight: 700, padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column floated="right" width={6}>
            <Image
              src="https://orig00.deviantart.net/520d/f/2016/066/1/c/dp_by_karliin-d9u8m8o.png"
              size="middle"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Inventors and Lawyers, get things done virtually
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Blah Blah Blah Matter goes here
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row />
        <Grid.Row />
        <Grid.Row centered>
          <Grid.Column textAlign="center">
            <Header as="h3" style={{ fontSize: "2em" }}>
              What Else We Can Do
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Blah Blah Blah Matter goes here again in new row's column with
              center text alignment...
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Try IPR Hub Enterprise
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Use IPRHub on-premises with your own servers or in a private cloud
          with IPRHub Enterprise. Improve your customers privacy and
          confidentiality with private servers, priority technical support, and
          more.
        </p>
        <Button as="a" primary size="large">
          Try Enterprise
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a>See what our happy clients say</a>
        </Divider>
        <p style={{ fontSize: "1.33em" }}>
          Blah Blah Blah customers with 5 star feedback goes here...
        </p>
      </Container>
    </Segment>
  </div>
);
export default HomepageLayout;
