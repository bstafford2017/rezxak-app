import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../../public/logo-transparent.png';

const Background = styled.div`
  background: linear-gradient(90deg, #aaa 0%, #000 100%);
`;

const Heading = styled.h1`
  padding-top: 75px;
  margin: 0px;
`;

const Subtext = styled.p`
  font-style: italic;
  margin: 0px;
  position: relative;
  left: 75px;
`;

const ButtonContainer = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
`;

const Button = styled.a`
  text-decoration: none;

  background-color: #fed84b;
  color: #000;
  border-width: 2px;
  border-style: solid;
  border-color: #000;
  border-radius: 15px;
  padding: 15px;
  transition: background-color 1s;

  &:hover {
    background-color: #fa7993;
    cursor: pointer;
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GridItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 85px 25px;
  min-width: 300px;
`;

export default function () {
  return (
    <Background>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        transition={{ repeatType: 'reverse' }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <GridContainer>
          <GridItem>
            <Heading>Rezxak Consulting</Heading>
            <Subtext>Innovation at heart</Subtext>
            <ButtonContainer>
              <Button href="#services">Learn more!</Button>
            </ButtonContainer>
          </GridItem>
          <GridItem>
            <img width={350} height={350} src={Logo} alt="Rezxak logo" />
          </GridItem>
        </GridContainer>
      </motion.div>
    </Background>
  );
}
