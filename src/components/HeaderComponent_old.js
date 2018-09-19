import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Container,
  Icon,
  Grid,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <Segment inverted color="black" vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <List link inverted>
              <List.Item as="a">
                <Link to="/about" className="item">
                  About Us
                </Link>
              </List.Item>
              <List.Item as="a">
                <Link to="/contact" className="item">
                  Contact Us
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List link inverted>
              <List.Item as="a">Privacy Policy</List.Item>
              <List.Item as="a">Terms and Conditions</List.Item>
              <List.Item>
                <Link to="/faq" className="item">
                  FAQ
                </Link>
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
          <div style={{ background: "black" }}>
            <Menu
              fixed={fixed ? "top" : null}
              pointing={!fixed}
              secondary={!fixed}
              size="huge"
              inverted
            >
              <Container>
                <Link to="/" className="item">
                  IPR Hub
                </Link>
                <Link to="/about" className="item">
                  About Us
                </Link>
                <Link to="/contact" className="item">
                  Contact Us
                </Link>
              </Container>
            </Menu>
          </div>
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
            <Menu.Item>
              <Link to="/" className="item">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about" className="item">
                About Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/contact" className="item">
                Contact Us
              </Link>
            </Menu.Item>
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
                {children}
              </Container>
            </Segment>
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
    <Footer />
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HeaderComponent = ({ children }) => (
  <ResponsiveContainer>{children}</ResponsiveContainer>
);

export default HeaderComponent;
