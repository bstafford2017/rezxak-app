import React from 'react';
import styled from 'styled-components';
import Logo from '../../public/logo.jpg';

const Footer = styled.footer`
  color: #eee;
`;

const LogoAndText = styled.div`
  padding: 35px 75px;
`;

export default function () {
  return (
    <Footer>
      <LogoAndText>
        <img width={100} height={100} src={Logo} alt="Rezxak logo" />
        <p>Rezxak, LLC 2024</p>
      </LogoAndText>
    </Footer>
  );
}
