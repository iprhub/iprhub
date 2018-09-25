import React, { Component } from "react";
import {
  Icon,
  Menu,
  Responsive,
  Visibility,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link, NavLink } from "react-router-dom";

class DesktopContainer extends Component {
  state = { fixed: false };

  handleToggle = () => this.setState({ fixed: !this.state.fixed });

  render() {
    const { fixed } = this.state;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.handleToggle}
          onBottomPassedReverse={this.handleToggle}
        >
          <div style={{ background: 'white' }}>
            <Menu
              fixed={fixed ? "top" : null}
              pointing={!fixed}
              secondary={!fixed}
              size="huge"
              >
              <div className='ui container'>

                <Menu.Item><Icon name='pied piper' size='large'/></Menu.Item>

                <NavLink
                  exact
                  to='/'
                  className='item'
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'black'
                  }}
                  >
                  IPRHub
                </NavLink>

                <NavLink
                  exact
                  to='/about'
                  className='item'
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'black'
                  }}
                  >
                  About Us
                </NavLink>

                <NavLink
                  exact
                  to='/contact'
                  className='item'
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'black'
                  }}
                  >
                  Contact Us
                </NavLink>

              </div>
            </Menu>
          </div>
        </Visibility>
      </Responsive>
    );
  }
}

class MobileContainer extends Component {

  state = { };

  handleToggle = () => this.setState({ menuOpened: !this.state.menuOpened });

  render() {

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <div>
          <Menu fluid inverted pointing size="large">
            <Link 
              to="/" 
              inverted 
              className='item' 
              style={{ color: "white", fontSize: "1.2em" }}>
              IPR Hub
            </Link>
            <Menu.Item position="right" onClick={this.handleToggle}>
              <Icon inverted name="sidebar" />
            </Menu.Item>
          </Menu>
        </div>

        <div>
          { this.state.menuOpened &&
            <Menu animation="uncover" fluid size="small" inverted vertical>
              <NavLink
                exact
                to='/'
                className='item'
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'black'
                }}
                onClick={() => this.handleToggle()}
                >
                IPRHub
              </NavLink>
              <NavLink
                exact
                to='/about'
                className='item'
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'black'
                }}
                onClick={() => this.handleToggle()}
                >
                About Us
              </NavLink>
              <NavLink
                exact
                to='/contact'
                className='item'
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'black'
                }}
                onClick={() => this.handleToggle()}
                >
                Contact Us
              </NavLink>
            </Menu>
          }
        </div>
      </Responsive>
    );
  }
}

const Header = () => (
  <div>
    <DesktopContainer />
    <MobileContainer /> 
  </div>
);

export default Header;
