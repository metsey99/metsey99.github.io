import React, { useState } from 'react';
import styled from 'styled-components';
import NavBarElement from './NavBarElement/NavBarElement';
import { useScroll } from './useScroll';
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useEffect } from 'react/cjs/react.development';


const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 5%;
    position: fixed;
    width: 90%;
    visibility: ${props => props.direction ? "visible" : "hidden"};

    background: #0f0c29;
    box-shadow: 0px 1px 5px #07051c;
    z-index: 99;
    height: 42px;
`;

const StyledNavLogo = styled.span`
    color: #e6f1ff;
    font-size: 36px;
    font-weight: bold;
    font-family: 'Courier New', monospace;
    & > span{
        color: #64ffda;
    }
`;

const StyledNavMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 768px){
      display: none;
    }
`;

const StyledMobileNavBar = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 769px){
    display: none;
  }
`;

const Header = (props) => {
  const { y, x, scrollDirection } = useScroll();
  const [isNavBarOn, setIsNavBarOn] = useState(false);

  useEffect(() => {
    setNavBarOff()
  }, [scrollDirection])

  const handleNavBarClick = () => {
    setIsNavBarOn(!isNavBarOn);
  }

  const setNavBarOff = () => {
    setIsNavBarOn(false);
  }

  return (
    <StyledNavBar direction={scrollDirection === "down"} navBarOn={isNavBarOn}>
      <StyledNavLogo>
        <span>M</span>et<span>S</span>ey
      </StyledNavLogo>
      <StyledNavMenu>
        <NavBarElement name="About" toId="about" />
        <NavBarElement name="Experience" toId="experience" />
        <NavBarElement name="Contact" toId="contact" />
      </StyledNavMenu>
      <StyledMobileNavBar onClick={handleNavBarClick}>
        {
          isNavBarOn ?
            <BiX color="#64ffda" size="35px" />
            :
            <BiMenuAltRight color="#64ffda" size="35px" />
        }
      </StyledMobileNavBar>
      {isNavBarOn ?
        <div style={{ background: "linear-gradient(180deg, hsla(246, 55%, 10%, 1) 0%, hsla(247, 57%, 27%, 1) 100%)", position: "absolute", zIndex: 99, width: "100%", left: 0, top: 72 }}>
          <NavBarElement name="About" toId="about" handleNavBar={setNavBarOff} />
          <NavBarElement name="Experience" toId="experience" handleNavBar={setNavBarOff} />
          <NavBarElement name="Contact" toId="contact" handleNavBar={setNavBarOff} />
        </div>
        : null}
    </StyledNavBar>
  );
}

export default Header;