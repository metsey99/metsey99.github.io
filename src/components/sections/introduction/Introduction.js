import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 100vh;
  color: white;
  margin: auto 10%;
`;

const IntroText = styled.span`
  position: relative;
`;

const StyledIntroTop = styled.span`
  font-size: 16px;
  font-family: 'Courier New', monospace;
  color: #64ffda;
  font-weight: 600;
`;

const StyledIntroName = styled.h1`
  font-size: 5rem;
  color: #ccd6f6;
  margin: 3% 0;
  font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
  @media screen and (max-width: 768px){
    font-size: 2rem;
  }
`;

const StyledInfoTop = styled.h3`
  color: #8892b0;
  font-size: 3rem; 
  margin: 0;
  @media screen and (max-width: 1056px) and (min-width: 768px){
    font-size: 2rem;
  }
  @media screen and (max-width: 768px){
    font-size: 1.5rem;
  }
`;

const StyledInfoBottom = styled.p`
  font-size: 1.25rem;
  max-width: 540px;
  color: #8892b0;
  @media screen and (max-width: 768px){
    font-size: 1rem;
    line-height: 30px;
  }
`;

const Introduction = () => {
  const endingPieces = [
    'building things in web.',
    'experimenting with AI.',
    'playing Chess.',
    'following E-Sports.'
  ]

  const [phraseIndex, setPhraseIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhraseIndex((phraseIndex + 1) % 4)
    }, 2000);
    return () => clearTimeout(timer);
  }, [phraseIndex])

  return (
    <StyledIntroWrapper>
      <StyledIntroTop>Hi, my name is</StyledIntroTop>
      <StyledIntroName>Metehan Seyran</StyledIntroName>
      <StyledInfoTop>I like <IntroText>{endingPieces[phraseIndex]}</IntroText></StyledInfoTop>
      <StyledInfoBottom>I am a recently graduated Software Engineer working on mainly front and back end web development. Also I like to read papers related to AI, Deep Learning, and Deep Reinforcement Learning.</StyledInfoBottom>
    </StyledIntroWrapper>
  )
}

export default Introduction;