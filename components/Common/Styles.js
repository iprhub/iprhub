import styled from 'styled-components';

export const GenericPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 766px;
  padding: 40px 20vh;
`;

export const Heading1 = styled.p`
  font-size: 2.9rem;
  font-weight: 700;
  &:after {
    background-color: #6d48e5;
    content: '';
    display: block;
    height: 5px;
    margin: 0.5em 0;

`;

export const Heading2 = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;
