import React from 'react';
import styled from 'styled-components';

//local imports
import { HomeDesign } from '../static/ProductIllustrations';

const HomeWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1152px;
  padding: 70px 24px;
  text-align: center;
  min-height: 766px;
`;

const StrongText = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 3rem;
  font-weight: 600;
  padding-top: 20px;
  margin: 0 auto;
  max-width: 744px;
  line-height: 4.3rem;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeDesign />
      <StrongText>
        The new era of acquiring Intellectual Property Rights is here.
      </StrongText>
    </HomeWrapper>
  );
};

export default Home;
