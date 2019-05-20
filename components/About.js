import React from 'react';
import styled from 'styled-components';

//local imports
import { GenericPageWrapper, Heading1, BodyText } from './Common/Styles';

const TeamBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  width: 60%;
  justify-items: center;
  margin-top: 10vh;
  grid-gap: 50px;
`;

const TeamMember = styled.div`
  text-align: center;
  /* padding: 0px 50px; */
`;

const MemberDetails = styled.p`
  line-height: 1.4rem;
`;

const About = () => {
  return (
    <GenericPageWrapper>
      <Heading1>About Us</Heading1>
      <BodyText>
        iprhub is an Intellectual Property Rights management platform aimed at
        simplifying Intellectual Property applications, prosecution, tracking
        and management for innovators, creators, right holders and IPR
        Attorneys.
      </BodyText>
      {/* <TeamBox>
        <TeamMember>
          <Heading2>Founder</Heading2>
          <MemberDetails>
            To be filled by text, entering random text to check the look.
          </MemberDetails>
        </TeamMember>
        <TeamMember>
          <Heading2>CTO</Heading2>
          <MemberDetails>
            To be filled by text, entering random text to check the look.
          </MemberDetails>
        </TeamMember>
      </TeamBox> */}
    </GenericPageWrapper>
  );
};

export default About;
