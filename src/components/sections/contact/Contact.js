import React from 'react';
import styled from 'styled-components';
import Socials from '../../socials/Socials';

const StyledWrapper = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto 10%;
`;

const StyledTitle = styled.h1`
  color: #ccd6f6;
  font-size: 2.75rem;
  @media screen and (max-width: 768px){
    font-size: 1.75rem;
  }
`;

const StyledPhrase = styled.span`
  font-size: 1.75rem;
  color: #8892b0;
  max-width: 700px;
  line-height: 40px;
  @media screen and (max-width: 768px){
    font-size: 1.25rem;
  }
  margin-bottom: 5%;
`;

const StyledContactAnchor = styled.a`
  color: #64ddea;
  border: 2px solid #64ddea;
  border-radius: 12px;
  padding: 2% 5%;

  font-size: 18px;
  cursor: pointer;
  text-decoration: none;

  :hover{
    opacity: 0.6;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    padding: 15px;
  }
`;

const Contact = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Send Me a Message!</StyledTitle>
      <StyledPhrase>
        Got a question, exciting proposal/opportunity or just want to say hello? Don't hesitate to contact me. I'll try my best to get back to you as soon as possible!
      </StyledPhrase>
      <div>
        <Socials />
      </div>
      <StyledContactAnchor href="mailto:mseyran99@gmail.com">Say Hello!</StyledContactAnchor>
    </StyledWrapper>
  )
}

export default Contact;