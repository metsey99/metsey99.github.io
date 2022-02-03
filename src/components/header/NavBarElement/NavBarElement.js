import React from 'react';
import styled from 'styled-components';

const StyledNavButton = styled.div`
    min-width: 0;
    width: 125px;
    color: #e6f1ff;
    padding: 2.5%;
    border-radius: 12px;
    border: 1px solid #64ffda;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
    :hover{
      background-color: #64ffda;
      color: #24243e;
    }
    font-family: 'Courier New', monospace;
    font-weight: 600;

    @media screen and (max-width: 768px){
        width: 90%;
        margin: 2% auto;
        padding: 15px 0;
    }
`;

const NavBarElement = ({ toId, name, handleNavBar }) => {

  const handleClick = () => {
    document.getElementById(toId).scrollIntoView({
      behavior: 'smooth',
      block: "start",
    });
    handleNavBar();
  }

  return (
    <StyledNavButton onClick={handleClick}>
      {name}
    </StyledNavButton>
  );
}

export default NavBarElement;