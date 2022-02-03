import React from 'react';
import Socials from '../socials/Socials';
import MailField from '../socials/Mail';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5%;
`;

const StyledSocialsWrapper = styled.div`
  width: 10%;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const StyledContentWrapper = styled.div`
  width: 80%;
  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

const StyledMailFieldWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const Content = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledSocialsWrapper>
        <Socials />
      </StyledSocialsWrapper>
      <StyledContentWrapper>
        {children}
      </StyledContentWrapper>
      <StyledMailFieldWrapper>
        <MailField />
      </StyledMailFieldWrapper>
    </StyledWrapper>
  );
}

export default Content;