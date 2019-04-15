import React from 'react';
import styled, { css } from 'styled-components';

//local imports
import { HomeDesign } from '../static/ProductIllustrations';
import { phone } from '../lib/utils/mediaQueries';
import { RightArrow } from '../static/CommonIcons';

const HomeWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1152px;
  padding: 40px 24px;
  text-align: center;
  min-height: 766px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${phone(css`
    padding: 70px 24px;
  `)};
`;

const StrongText = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 3rem;
  font-weight: 500;
  padding-top: 20px;
  margin: 0 auto;
  max-width: 750px;
  line-height: 3.8rem;
  ${phone(css`
    font-size: 1.5rem;
    line-height: 2.3rem;
    font-weight: 500;
  `)};
`;

const IllustrationsWrapper = styled.div`
  width: 55vw;
  ${phone(css`
    width: 80vw;
  `)};
`;

const Home = () => {
  return (
    <HomeWrapper>
      <IllustrationsWrapper>
        <HomeDesign />
      </IllustrationsWrapper>
      <StrongText>
        The new era of acquiring Intellectual Property Rights is here.
      </StrongText>
    </HomeWrapper>
  );
};

export default Home;
