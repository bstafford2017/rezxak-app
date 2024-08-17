import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LogoWithName from '../../public/basic-logo-text.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import useIsMobile from '../hooks/mobile';

const Navigation = styled.nav`
  background-color: #0d0822ff;
`;

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

const DrawerContainer = styled.div`
  background-color: #333;
`;

const DrawerLink = styled.a`
  display: block;
  color: #fed84b;
  text-decoration: none;
  padding: 15px 35px;

  transition: color 1s;

  &:hover {
    color: #fa7993;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  display: block;
  padding: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export default () => {
  const isMobile = useIsMobile();

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Navigation>
      <a href="./">
        <Logo width={315} height={105} src={LogoWithName} alt="Rezxak logo" />
      </a>
      {isMobile ? (
        <>
          <Icon
            icon={faBars}
            color="#fed84b"
            size="2xl"
            onClick={toggleDrawer}
          />
          {openDrawer && (
            <DrawerContainer>
              <DrawerLink href="#about-us">About us</DrawerLink>
              <DrawerLink href="#services">Services</DrawerLink>
              <DrawerLink href="#talent">Our talent</DrawerLink>
              <DrawerLink href="#contact-us">Contact us</DrawerLink>
            </DrawerContainer>
          )}
        </>
      ) : (
        <NavLinkContainer>
          <NavLink href="#about-us">About us</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#talent">Our talent</NavLink>
          <NavLink href="#contact-us">Contact us</NavLink>
        </NavLinkContainer>
      )}
    </Navigation>
  );
};
