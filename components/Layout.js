import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

//local imports
import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';
import { Theme } from '../lib/utils/myTheme';
import { headerFont, bodyFont } from '../lib/utils/fonts';

const ContentWrapper = styled.div`
  font-family: ${bodyFont};
`;

const HeaderWrapper = styled.div`
  font-family: ${headerFont};
`;

const FooterWrapper = styled.div`
  font-family: ${headerFont};
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <Meta title="IPRHUB" />
        <HeaderWrapper>
          <Nav />
        </HeaderWrapper>
        <ContentWrapper>{children}</ContentWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
