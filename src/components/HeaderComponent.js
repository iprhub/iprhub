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
  Visibility,
  Header
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
              <List.Item>Privacy Policy</List.Item>

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

class DesktopContainer extends Component {
  state = { activeItem: "IPRHub" };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { activeItem } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div style={{ background: "black" }}>
            <Menu
              fluid
              inverted
              fixed={fixed ? "top" : null}
              pointing={!fixed}
              secondary={!fixed}
              size="huge"
            >
              <Menu.Item
                as="p"
                style={{ padding: "0em 0em" }}
                name="IPRHub"
                fitted="horizontally"
                active={activeItem === "IPRHub"}
                onClick={this.handleItemClick}
              >
                <Link to="/" className="item">
                  IPR Hub
                </Link>
              </Menu.Item>
              <Menu.Item
                as="p"
                name="About"
                fitted="horizontally"
                style={{ padding: "0em 0em" }}
                active={activeItem === "About"}
                onClick={this.handleItemClick}
              >
                <Link to="/about" className="item">
                  About Us
                </Link>
              </Menu.Item>
              <Menu.Item
                as="p"
                name="Contact"
                fitted="horizontally"
                style={{ padding: "0em 0em" }}
                active={activeItem === "Contact"}
                onClick={this.handleItemClick}
              >
                <Link to="/contact" className="item">
                  Contact Us
                </Link>
              </Menu.Item>
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
  state = { activeItem: "" };
  handlePusherClick = () => {
    const { menuOpened } = this.state;

    if (menuOpened) this.setState({ menuOpened: false });
  };
  handleItemClick = nm => {
    this.setState({ activeItem: nm });
  };
  handleToggle = () => this.setState({ menuOpened: !this.state.menuOpened });

  render() {
    const { children } = this.props;
    const { activeItem } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <div style={{ background: "black" }}>
          <Menu fluid pointing secondary size="large">
            <Menu.Item
              onClick={() => {
                this.handleItemClick("IPRHub");
              }}
            >
              <Header
                inverted
                style={{
                  fontSize: "1.5em"
                }}
              >
                <Link to="/" style={{ color: "white" }}>
                  IPR Hub
                </Link>
              </Header>
            </Menu.Item>
            <Menu.Item position="right" onClick={this.handleToggle}>
              <Icon inverted name="sidebar" />
            </Menu.Item>
          </Menu>
        </div>
        <div>
          {this.state.menuOpened ? (
            <Menu animation="uncover" fluid size="small" inverted vertical>
              <Menu.Item
                style={{ padding: "0em 0em" }}
                fitted="horizontally"
                active={activeItem === "IPRHub"}
                onClick={() => {
                  this.handleItemClick("IPRHub");
                  this.handleToggle();
                }}
              >
                <Link to="/" className="item">
                  IPR Hub
                </Link>
              </Menu.Item>
              <Menu.Item
                fitted="horizontally"
                style={{ padding: "0em 0em" }}
                active={activeItem === "About"}
                onClick={() => {
                  this.handleItemClick("About");
                  this.handleToggle();
                }}
              >
                <Link to="/about" className="item">
                  About Us
                </Link>
              </Menu.Item>
              <Menu.Item
                fitted="horizontally"
                style={{ padding: "0em 0em" }}
                active={activeItem === "Contact"}
                onClick={() => {
                  this.handleItemClick("Contact");
                  this.handleToggle();
                }}
              >
                <Link to="/contact" className="item">
                  Contact Us
                </Link>
              </Menu.Item>
            </Menu>
          ) : null}
        </div>
        {children}
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
