import React from 'react';
import styled from 'styled-components';
import LogoWithName from '../../public/logo-with-text.png';

const Navigation = styled.nav``;

const Logo = styled.img`
  padding-left: clamp(0px, 55px, 75px);
`;

const NavLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: 20px;
`;

const NavLink = styled.a`
  color: #fed84b;
  text-decoration: none;
  padding: 15px 35px;

  transition: color 1s;

  &:hover {
    color: #fa7993;
  }
`;

export default () => {
  return (
    <Navigation>
      <a href="./">
        <Logo width={315} height={105} src={LogoWithName} alt="Rezxak logo" />
      </a>
      <NavLinkContainer>
        <NavLink href="#about-us">About us</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#talent">Our talent</NavLink>
        <NavLink href="#contact-us">Contact us</NavLink>
      </NavLinkContainer>
    </Navigation>
  );
};
