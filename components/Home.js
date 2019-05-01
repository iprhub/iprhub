import React from 'react';
import styled, { css } from 'styled-components';

//local imports
import { HomeDesign } from '../static/ProductIllustrations';
import { phone } from '../lib/utils/mediaQueries';
import { BulbIcon, TMIcon, DesignIcon } from '../static/CommonIcons';

const HomeWrapper = styled.div`
  min-height: 766px;
  display: grid;
  grid-gap: 10vh;
`;
const MainLanding = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1152px;
  padding: 40px 24px;
  text-align: center;
  /* min-height: 766px; */
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 2.5fr 3fr;
  grid-gap: 3.5vw;
  /* flex-direction: row; */
  /* align-items: center; */
  ${phone(css`
    padding: 70px 24px;
    /* flex-direction: column; */
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  `)};
`;

const StrongText = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 2.8rem;
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
  text-align: center;
  ${phone(css`
    font-size: 1.1rem;
    font-weight: 500;
  `)};
`;

const IllustrationsWrapper = styled.div`
  width: 40vw;
  ${phone(css`
    width: 80vw;
    align-self: center;
  `)};
`;

const CardsWrapper = styled.div`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 60px;
  ${phone(css`
    justify-items: center;
    flex-direction: column;
    align-items: space-between;
    margin-bottom: 5vh;
    margin-left: 5vw;
    margin-right: 5vw;
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
  /* color: #707b7b; */
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
    /* color: #6d48e5; */
  }
`;

const CardHeader = styled.div`
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 8px;
  ${phone(css`
    box-sizing: content-box;
    font-size: 0.7rem;
  `)};
`;

const CardContent = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  font-weight: 300;
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
  /* margin-top: -30px; */
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
  align-items: center;s
`;

const SmallText = styled.p`
  font-size: 1.3rem;
  line-height: 1.9rem;
  font-weight: 300;
  ${phone(css`
    font-size: 1.1rem;

    margin-top: 2vh;
    line-height: 1.4rem;
  `)};
`;
const Home = () => {
  return (
    <HomeWrapper>
      <MainLanding>
        <LeftWrapper>
          <StrongText>Intellectual Property, Simplified.</StrongText>
          <SmallText>
            iprhub is an Intellectual Property Rights management platform aimed
            at simplifying Intellectual Property applications, prosecution,
            tracking and management for innovators, creators, right holders and
            IPR Attorneys.
          </SmallText>
          <PrimaryButton>Get Started</PrimaryButton>
        </LeftWrapper>

        <IllustrationsWrapper>
          <HomeDesign />
        </IllustrationsWrapper>
      </MainLanding>
      <div>
        <StrongText2>Our Platform</StrongText2>
        <CardsWrapper>
          <CardContainer>
            <Card>
              <BulbIcon size="42" />
              <CardHeader>Patents</CardHeader>
              <CardContent>
                All your inventions safe and secure, on the cloud. Collaborate
                with Patent Agents/Attorneys. With iprhub Sit back, relax and
                manage your Patents at the click of a button.
              </CardContent>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <TMIcon size="42" />
              <CardHeader>Trademarks</CardHeader>
              <CardContent>
                Form an Individual to a Corporation, building and nurturing
                Brands is the key to market success. iprhub allows you to manage
                your Trademarks on the go. Safe and secure. Compliance? Sorted!
              </CardContent>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <DesignIcon size="42" />
              <CardHeader>Design</CardHeader>
              <CardContent>
                While you were working on evolving that new design language for
                your products. We are hard at work to design a plat form that
                allows you to identify competent IPR Attorneys who help you
                secure your IPR over your Designs. No matter the size of your
                portfolio, iprhub has you covered.
              </CardContent>
            </Card>
          </CardContainer>
        </CardsWrapper>
      </div>
    </HomeWrapper>
  );
};

export default Home;
