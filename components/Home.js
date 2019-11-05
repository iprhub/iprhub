import React from "react";
import styled, { css } from "styled-components";
// import ReactGA from "react-ga";

//local imports
import { HomeDesign } from "../static/ProductIllustrations";
import { phone } from "../lib/utils/mediaQueries";
import { BulbIcon, TMIcon, DesignIcon } from "../static/CommonIcons";
import rem from "../lib/utils/rem";
import { Button } from "semantic-ui-react";

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
  display: flex;

  flex-direction: column;
  align-items: center;
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
  font-size: ${rem(45)};
  font-weight: 500;
  margin: 0 auto;
  max-width: 750px;
  align-self: center;
  ${phone(css`
    font-size: ${rem(35)};
    font-weight: 500;
  `)};
`;

const StrongText2 = styled.div`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: ${rem(35)};
  font-weight: 500;
  margin: 0 auto;
  max-width: 750px;
  text-align: center;
  ${phone(css`
    font-size: ${rem(24)};
    font-weight: 500;
  `)};
`;

const IllustrationsWrapper = styled.div`
  width: 50vw;
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
  font-size: ${rem(30)};
  font-weight: 500;
  margin-top: 8px;
  ${phone(css`
    box-sizing: content-box;
    font-size: ${rem(24)};
  `)};
`;

const CardContent = styled.p`
  text-align: center;
  line-height: 1.5rem;
  font-weight: 300;
`;

const PrimaryButton = styled.a`
  text-decoration: none;
  background-color: #6d48e5;
  border-radius: 3px;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  font-size: ${rem(20)};
  font-weight: 600;
  line-height: 1.42857;
  min-width: 8px;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #4e2fb5;
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
  padding: 10px 10vw;
`;

const SmallText = styled.p`
  font-size: ${rem(21)};
  line-height: 1.9rem;
  font-weight: 300;
  ${phone(css`
    font-size: ${rem(18)};

    margin-top: 2vh;
    line-height: 1.4rem;
  `)};
`;
const Home = () => {
  // ReactGA.initialize("UA-150850440-1");
  // ReactGA.pageview("/");

  return (
    <HomeWrapper>
      <MainLanding>
        <IllustrationsWrapper>
          <HomeDesign />
        </IllustrationsWrapper>
        <LeftWrapper>
          <StrongText>Intellectual Property, Simplified.</StrongText>
          <SmallText>
            iprhub is an Intellectual Property Rights management platform aimed
            at simplifying Intellectual Property applications, prosecution,
            tracking and management for innovators, creators, right holders and
            IPR Attorneys.
          </SmallText>
          <PrimaryButton href="https://app.iprhub.io">
            Get In Touch
          </PrimaryButton>
        </LeftWrapper>
      </MainLanding>
      {/* <div>
        <StrongText2>Our Platform</StrongText2>
        <CardsWrapper>
          <CardContainer>
            <Card>
              <BulbIcon size="42" />
              <CardHeader>Patents</CardHeader>
              <CardContent>
                 Collaborate
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
                Coming Soon...
              </CardContent>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <DesignIcon size="42" />
              <CardHeader>Design</CardHeader>
              <CardContent>
              Coming Soon...
              </CardContent>
            </Card>
          </CardContainer>
        </CardsWrapper>
      </div> */}
    </HomeWrapper>
  );
};

export default Home;
