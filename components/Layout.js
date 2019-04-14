import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

//local imports
import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';
import { Theme } from '../lib/utils/myTheme';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800');
    font-family: 'Montserrat', sans-serif;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <GlobalStyles />
        <Meta title="IPRHUB" />
        <Nav />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
