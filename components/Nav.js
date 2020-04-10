import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import ReactGA from "react-ga";

//local imports
import { phone } from "../lib/utils/mediaQueries";
import { Button } from "semantic-ui-react";

const NavBarStyle = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: flex;
  /* justify-content: space-between; */
  padding: 15px 0;
  margin-left: 10%;
  margin-right: 10%;
  ${phone(css`
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: -8px;
  `)};
`;

const MenuStyle = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: flex;
  font-size: 15px;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
`;

const MenuItemStyle = styled.a`
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: ${props => (props.MenuItemIsActive ? "#6d48e5" : "#1c1d1e")};
  cursor: pointer;
  margin: 0 0 0 48px;
  opacity: ${props => (props.MenuItemIsActive ? "1" : "0.9")};
  font-weight: ${props => (props.MenuItemIsActive ? "450" : "360")};
  padding: 0;
  text-decoration: none;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease;
  &:hover {
    opacity: 1;
    font-weight: 400;
    color: #6d48e5;
  }

  ${phone(css`
    margin: 0;
    padding: 0 4vw;
  `)};
`;

const RightMenuStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const LogoStyle = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;

  ${phone(css`
    font-size: 1.9rem;
  `)};
`;
const Nav = () => {
  useEffect(() => {
    ReactGA.initialize("UA-150850440-1");
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <NavBarStyle>
      <Link href="/">
        <LogoStyle>iprhub</LogoStyle>
      </Link>
      <MenuStyle>
        {/* <Link href="/">
          <MenuItemStyle MenuItemIsActive="true">Home</MenuItemStyle>
        </Link> */}
        <Link href="/about">
          <MenuItemStyle>About</MenuItemStyle>
        </Link>
        <Link href="/contact">
          <MenuItemStyle>Contact</MenuItemStyle>
        </Link>
        <RightMenuStyle>
          <MenuItemStyle href="https://app.iprhub.io/auth/login">Log In</MenuItemStyle>
          {/* <MenuItemStyle href="https://app.iprhub.io/auth/signup">Sign Up</MenuItemStyle> */}
          {/* <Button href="https://demo.iprhub.io">Demo</Button> */}
        </RightMenuStyle>
      </MenuStyle>
    </NavBarStyle>
  );
};

export default Nav;

export { LogoStyle };
