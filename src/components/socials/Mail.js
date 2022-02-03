import React from 'react';
import styled from 'styled-components';

const StyledSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 90%;
  position: fixed;
`;

const StyledSocialWrapper = styled.div`
  min-width: 0;
  & > a{
    color: #e6f1ff;
    text-decoration: none;
  }
  writing-mode: vertical-rl;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  font-size: 18px;
`;

const MailField = () => {
  return (
    <StyledSocialsContainer>
      <StyledSocialWrapper>
        <a href="mailto:mseyran99@gmail.com">mseyran99@gmail.com</a>
      </StyledSocialWrapper>
    </StyledSocialsContainer>
  );
}

export default MailField;