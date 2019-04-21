import React from 'react';
import styled, { css } from 'styled-components';

//local imports
import { HomeDesign } from '../static/ProductIllustrations';
import { phone } from '../lib/utils/mediaQueries';
import { BulbIcon, TMIcon, DesignIcon } from '../static/CommonIcons';

const HomeWrapper = styled.div`
  min-height: 766px;
  display: flex;
  flex-direction: column;
`;
const MainLanding = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1152px;
  padding: 40px 24px;
  text-align: center;
  /* min-height: 766px; */
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  ${phone(css`
    padding: 70px 24px;
    flex-direction: column;
  `)};
`;

const StrongText = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 2.2rem;
  font-weight: 500;
  margin: 0 auto;
  max-width: 750px;
  align-self: center;
  ${phone(css`
    font-size: 1.8rem;
    font-weight: 500;
  `)};
`;

const StrongText2 = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0 auto;
  max-width: 750px;
  align-self: center;
  ${phone(css`
    font-size: 1.1rem;
    font-weight: 500;
  `)};
`;

const IllustrationsWrapper = styled.div`
  width: 45vw;
  ${phone(css`
    width: 80vw;
    align-self: center;
  `)};
`;

const CardsWrapper = styled.div`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 60px;
  ${phone(css`
    justify-items: center;
    flex-direction: column;
    align-items: space-between;
    margin-bottom: 5vh;
    margin-left: 15vw;
    margin-right: 15vw;
  `)};
`;
const CardContainer = styled.div`
  box-sizing: border-box;
  flex-basis: 33%;
  float: left;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  width: 33.3333%;
  ${phone(css`
    box-sizing: content-box;
    flex-basis: auto;
    width: auto;
    margin-top: 3vh;
  `)};
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 3px;
  box-shadow: #d8d8d8 0 3px 0 inset, rgba(0, 0, 0, 0.08) 0 5px 9px;
  box-sizing: border-box;
  color: #707b7b;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 35px 39px 39px;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease-out;
  will-change: transform;
  align-items: center;

  &:hover {
    box-shadow: #6d48e5 0 4px 0 inset, rgba(0, 0, 0, 0.08) 0 8px 14px;
    transform: translateY(-5px);
    color: #6d48e5;
  }
`;

const CardHeader = styled.div`
  box-sizing: border-box;
  font-size: 1.2rem;
  ${phone(css`
    box-sizing: content-box;
    font-size: 0.7rem;
  `)};
`;

const PrimaryButton = styled.div`
  background-color: #3fda97;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.42857;
  margin-bottom: 0;
  min-width: 8px;
  padding: 8px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.1s, 0.1s, 50ms;
  transition-property: background-color, border-color, box-shadow;
  transition-timing-function: ease-out, ease-out, ease-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  margin-top: -30px;
  &:hover {
    background-color: #25c17e;
    outline: 0;
  }
  ${phone(css`
    margin-top: auto;
    margin-bottom: 2vh;
  `)};
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const SmallText = styled.p`
  margin-top: -7vh;
  ${phone(css`
    margin-top: 2vh;
  `)};
`;
const Home = () => {
  return (
    <HomeWrapper>
      <MainLanding>
        <LeftWrapper>
          <StrongText>Intellectual Property, Simplified.</StrongText>
          <SmallText>
            iprhub is a place where inventors meet attorneys.
          </SmallText>
          <PrimaryButton>Get Started</PrimaryButton>
        </LeftWrapper>

        <IllustrationsWrapper>
          <HomeDesign />
        </IllustrationsWrapper>
      </MainLanding>
      <StrongText2>Our Platform</StrongText2>
      <CardsWrapper>
        <CardContainer>
          <Card>
            <BulbIcon size="42" />
            <CardHeader>Patents</CardHeader>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            <TMIcon size="42" />
            <CardHeader>Trademarks</CardHeader>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card>
            <DesignIcon size="42" />
            <CardHeader>Design</CardHeader>
          </Card>
        </CardContainer>
      </CardsWrapper>
    </HomeWrapper>
  );
};

export default Home;
