import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

//local imports
import { phone } from '../lib/utils/mediaQueries';

const NavBarStyle = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  margin-left: 10%;
  margin-right: 10%;
  ${phone(css`
    flex-direction: column;
    align-items: center;
    padding: 0;
  `)};
`;

const MenuStyle = styled.div`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-size: 15px;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const MenuItemStyle = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: ${props => (props.MenuItemIsActive ? '#6d48e5' : '#1c1d1e')};
  cursor: pointer;
  margin: 0 0 0 48px;
  opacity: ${props => (props.MenuItemIsActive ? '1' : '0.8')};
  font-weight: ${props => (props.MenuItemIsActive ? '400' : '300')};
  padding: 0;
  text-decoration: none;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease;

  &:hover {
    opacity: 1;
    font-weight: 400;
  }

  ${phone(css`
    margin: 0;
    padding: 0 20px;
  `)};
`;

const LogoStyle = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;

  ${phone(css`
    font-size: 1.9rem;
  `)};
`;
const Nav = () => {
  return (
    <NavBarStyle>
      <Link href="/">
        <LogoStyle>iprhub</LogoStyle>
      </Link>
      <MenuStyle>
        <Link href="/">
          <MenuItemStyle MenuItemIsActive="true">Home</MenuItemStyle>
        </Link>
        <Link href="/about">
          <MenuItemStyle>About</MenuItemStyle>
        </Link>
        <Link href="/contact">
          <MenuItemStyle>Contact</MenuItemStyle>
        </Link>
        <MenuItemStyle>Sign in</MenuItemStyle>
      </MenuStyle>
    </NavBarStyle>
  );
};

export default Nav;

export { LogoStyle };
