import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../../../assets/ProfilePic.jpeg'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiReact,
  SiPython,
  SiPytorch,
  SiJava,
  SiPostgresql,
  SiNumpy
} from 'react-icons/si';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto 10%;
  @media screen and (max-width: 900px){
    height: 100%;
    margin-bottom: 10%;
  }
`;

const StyledAboutSecWrapper = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  @media screen and (max-width: 900px){
    flex-direction: column;
  }
`;

const StyledParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 5%;
  @media screen and (max-width: 900px){
    margin: 0;
  }
`;

const StyledInfoBottom = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  color: #8892b0;
  line-height: 35px;
  @media screen and (max-width: 900px){
    width: fit-content;
    font-size: 1rem;
  }
`;

const StyledHighlight = styled.span`
  color: #64ffda;
  font-weight: 600;
`;

const StyledAnchor = styled.a`
  color: #64ffda;
  font-weight: 600;
  text-decoration: none;
`;

const StyledProfilePicContainer = styled.div`
  background-color: #64ffda;
  border-radius: 12px;
`;

const StyledProfilePic = styled.img`
  width: 250px;
  height: inherit;
  border-radius: 12px;
  border: 2px solid #64ffda;
  mix-blend-mode: multiply;
  vertical-align: middle;
  :hover{
    mix-blend-mode: normal;
  }
`;

const StyledPhrase = styled.span`
  margin-bottom: 5%;
  font-size: 1.5rem;
  color: #8892b0;
  text-align: center;
  @media screen and (max-width: 900px){
    font-size: 1.25rem;
  }
`;

const StyledTechContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  & > * {
    margin: 2%
  }
`;

const About = () => {
  return (
    <StyledContainer>
      <StyledAboutSecWrapper>
        <StyledParagraphWrapper>
          <h1>About Me</h1>
          <StyledInfoBottom>
            Hi, I'm Metehan. I have graduated from <StyledHighlight>Istanbul Technical University</StyledHighlight> majoring <StyledHighlight>Computer Engineering</StyledHighlight> with a minor of <StyledHighlight>Applied Mathematics</StyledHighlight> in the summer of 2021. I have mainly worked on <StyledHighlight>Web FrontEnd Development</StyledHighlight>, <StyledHighlight>Machine Learning</StyledHighlight>, and <StyledHighlight>Deep Learning</StyledHighlight>. Currently, I am working as a full stack web developer at <StyledAnchor href="https://teamdefinex.com/" target="_blank">DefineX</StyledAnchor>.
          </StyledInfoBottom>
        </StyledParagraphWrapper>
        <StyledProfilePicContainer>
          <StyledProfilePic src={ProfilePic} alt="Metehan Profile Picture" />
        </StyledProfilePicContainer>
      </StyledAboutSecWrapper>
      <StyledPhrase>
        Here are some technologies that I have worked with
      </StyledPhrase>
      <StyledTechContainer>
        <SiHtml5 size={32} title="HTML5" color='#ccd6f6' />
        <SiCss3 size={32} title="CSS3" color='#ccd6f6' />
        <SiJavascript size={32} title="JavaScript" color='#ccd6f6' />
        <SiJquery size={32} title="jQuery" color='#ccd6f6' />
        <SiReact size={32} title="React.js" color='#ccd6f6' />
        <SiJava size={32} title="Java" color='#ccd6f6' />
        <SiPostgresql size={32} title="PostgreSQL" color='#ccd6f6' />
        <SiPython size={32} title="Python" color='#ccd6f6' />
        <SiNumpy size={32} title="NumPy" color='#ccd6f6' />
        <SiPytorch size={32} title="PyTorch" color='#ccd6f6' />
      </StyledTechContainer>
    </StyledContainer>
  )
}

export default About;