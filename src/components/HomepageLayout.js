import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const HomepageHeading = ({ mobile }) => (
  <Container textAlign="left">
    <Header
      as="h1"
      content="IPR Hub"
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
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
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu
            fixed={fixed ? "top" : null}
            pointing={!fixed}
            secondary={!fixed}
            size="huge"
          >
            <Container>
              <Menu.Item as="a" active>
                IPR Hub
              </Menu.Item>
              <Menu.Item as="a">About Us</Menu.Item>
              <Menu.Item as="a">Contact Us</Menu.Item>
            </Container>
          </Menu>
          <Segment style={{ minHeight: 700, padding: "1em 0em" }} vertical>
            <Grid container stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <HomepageHeading />
                </Grid.Column>
                <Grid.Column
                  floated="right"
                  width={6}
                  style={{ marginTop: "5em" }}
                >
                  <Image
                    size="middle"
                    src="https://i.pinimg.com/originals/8d/9a/2f/8d9a2fa4913f3ce2f418f19c2ea90bf2.jpg"
                    size="middle"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            vertical
            inverted
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">IPR Hub</Menu.Item>
            <Menu.Item as="a">About Us</Menu.Item>
            <Menu.Item as="a">Contact Us</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ minHeight: 700, padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column floated="right" width={6}>
            <Image
              size="large"
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
    </Segment>

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
          <a href="#">See what our happy clients say</a>
        </Divider>

        <p style={{ fontSize: "1.33em" }}>
          Blah Blah Blah customers with 5 star feedback goes here...
        </p>
      </Container>
    </Segment>
    <Segment inverted color="black" vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">About Us</List.Item>
                <List.Item as="a">Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <List link inverted>
                <List.Item as="a">Privacy Policy</List.Item>
                <List.Item as="a">Terms and Conditions</List.Item>
                <List.Item as="a">FAQ</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <p> © 2018, IPRHub</p>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
