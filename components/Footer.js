import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

//local imports
import { phone } from '../lib/utils/mediaQueries';

const FooterWrapper = styled.div`
  background-image: linear-gradient(#fafbfc 0, #fff 36px);
`;

const FooterStyle = styled.div`
  -webkit-font-smoothing: antialiased;

  box-sizing: border-box;
  display: flex;
  margin-left: 10%;
  margin-right: 10%;
  padding: 144px 0 72px;
  ${phone(css`
    flex-direction: column;
    padding: 70px 0 40px;
  `)};
`;

const FooterLeftStyle = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  flex: 2;
  margin: 0;
  padding: 0;
  text-align: left;
  ${phone(css`
    padding: 0px 0px 20px 0px;
    text-align: center;
  `)};
`;

const FooterRightStyle = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: flex;
  flex: 3;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

const FooterRightItemsGroupStyle = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const FooterItemsStyle = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #1c1d1e;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.75em;
  margin: 0;
  opacity: 0.85;
  padding: 0;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:first-child {
    font-weight: bold;
    opacity: 1;
  }
  &:nth-child(2) {
    margin: 12px 0 0;
  }
`;

const LogoStyle = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterStyle>
        <FooterLeftStyle>
          <Link href="/">
            <LogoStyle>iprhub</LogoStyle>
          </Link>
          <FooterItemsStyle>
            © Copyright 2019 IPRHUB. All rights reserved.
          </FooterItemsStyle>
        </FooterLeftStyle>
        <FooterRightStyle>
          <FooterRightItemsGroupStyle>
            <FooterItemsStyle>Company</FooterItemsStyle>
            <Link href="/">
              <FooterItemsStyle>Home</FooterItemsStyle>
            </Link>
            <Link href="/contact">
              <FooterItemsStyle>Contact</FooterItemsStyle>
            </Link>
            <Link href="/about">
              <FooterItemsStyle>About</FooterItemsStyle>
            </Link>
            <FooterItemsStyle>Sign in</FooterItemsStyle>
          </FooterRightItemsGroupStyle>
          <FooterRightItemsGroupStyle>
            <FooterItemsStyle>Legal</FooterItemsStyle>
            <FooterItemsStyle>Privacy Policy</FooterItemsStyle>
            <FooterItemsStyle>TnCs</FooterItemsStyle>
          </FooterRightItemsGroupStyle>
          <FooterRightItemsGroupStyle>
            <FooterItemsStyle>Stay in Touch</FooterItemsStyle>
            <FooterItemsStyle>Facebook</FooterItemsStyle>
            <FooterItemsStyle>Twitter</FooterItemsStyle>
            <FooterItemsStyle>Github</FooterItemsStyle>
          </FooterRightItemsGroupStyle>
        </FooterRightStyle>
      </FooterStyle>
    </FooterWrapper>
  );
};

export default Footer;
