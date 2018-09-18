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
              <List.Item as="a">
                <Link to="/tnc" className="item">
                  Terms and Conditions
                </Link>
              </List.Item>
              <List.Item as="a">Privacy Policy</List.Item>

              <List.Item as="a">
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
  state = { activeItem: "IPRHub" };
  handlePusherClick = () => {
    const { menuOpened } = this.state;

    if (menuOpened) this.setState({ menuOpened: false });
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleToggle = () => this.setState({ menuOpened: !this.state.menuOpened });

  render() {
    const { children } = this.props;
    const { activeItem } = this.state;
    const { menuOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <div style={{ background: "black" }}>
          <Menu fluid pointing secondary size="large">
            <Menu.Item>
              <Header
                inverted
                style={{
                  fontSize: "1.5em"
                }}
              >
                IPR Hub
              </Header>
            </Menu.Item>
            <Menu.Item position="right" onClick={this.handleToggle}>
              <Icon inverted name="sidebar" />
            </Menu.Item>
          </Menu>
        </div>
        <div /*Need to find a way to hide this div as default and should be visible when menuOpened is true*/
        >
          <Menu fluid size="small" inverted vertical>
            <Menu.Item
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
