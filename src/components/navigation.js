import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav``;

const Logo = styled.img`
  padding-left: clamp(0px, 55px, 75px);
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
`;

const NavLink = styled.a`
  color: #eee;
  text-decoration: none;
  padding: 15px 35px;

  transition: color 1s;

  &:hover {
    color: #fed84b;
  }
`;

export default () => {
  return (
    <Navigation>
      <a href="./">
        <Logo
          width={315}
          height={105}
          src="./logo-with-text.png"
          alt="Rezxak logo"
        />
      </a>
      <NavLinkContainer>
        <NavLink href="#about-us">About us</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact-us">Contact us</NavLink>
      </NavLinkContainer>
    </Navigation>
  );
};
