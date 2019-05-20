import styled, { css } from 'styled-components';

//local imports
import { phone } from '../../lib/utils/mediaQueries';
import rem from '../../lib/utils/rem';

export const GenericPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 766px;
  padding: 40px 20vw;
  ${phone(css`
    padding: 0px 5vw;
  `)};
`;

export const Heading1 = styled.p`
  font-size: ${rem(45)};
  font-weight: 700;
  &:after {
    background-color: #6d48e5;
    content: '';
    display: block;
    height: 5px;
    margin: 0.5em 0;
  }
  ${phone(css`
    font-size: ${rem(33)};
    font-weight: 600;
  `)};
`;

export const Heading2 = styled.p`
  font-size: ${rem(30)};
  font-weight: 600;
`;

export const BodyText = styled.p`
  font-size: ${rem(28)};

  text-align: center;
  font-weight: 400;
  ${phone(css`
    font-size: ${rem(20)};
  `)};
`;
