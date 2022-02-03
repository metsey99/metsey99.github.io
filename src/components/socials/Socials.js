import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiFile } from "react-icons/fi";
import styled from 'styled-components';

const StyledSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  height: 90%;

  @media screen and (max-width: 768px){
    position: static;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const StyledSocialWrapper = styled.div`
  margin-top: 50%;
  & > a{
    color: #e6f1ff;
  }

  @media screen and (max-width: 768px){
    margin: 10%;
    & > a{
      color: #8892b0;
    }
  }
`;

const Socials = () => {
  return (
    <StyledSocialsContainer>
      <StyledSocialWrapper>
        <a href="https://github.com/metsey99" target="_blank" rel="noreferrer"><FiGithub size="40px" /></a>
      </StyledSocialWrapper>
      <StyledSocialWrapper>
        <a href="https://www.instagram.com/methsey/" target="_blank" rel="noreferrer"><FiInstagram size="40px" /></a>
      </StyledSocialWrapper>
      <StyledSocialWrapper>
        <a href="https://www.linkedin.com/in/metehan-seyran/" target="_blank" rel="noreferrer"><FiLinkedin size="40px" /></a>
      </StyledSocialWrapper>
      <StyledSocialWrapper>
        <a href="https://drive.google.com/file/d/15Wl604cmFFfQVr-Z9Jz6CovOKjhTOEqB/view?usp=sharing" target="_blank" rel="noreferrer"><FiFile size="40px" /></a>
      </StyledSocialWrapper>
    </StyledSocialsContainer>
  );
}

export default Socials;