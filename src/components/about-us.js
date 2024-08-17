import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GridItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 85px 25px;
`;

const AboutContainer = styled.div`
  padding: 35px;
`;

const BuildButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BuildButton = styled.a`
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
  }
`;

export default function () {
  return (
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
      <AboutContainer>
        <h2 id="about-us">About us</h2>
        <GridContainer>
          <GridItem>
            <h3>What is Rezxak?</h3>
            <p>
              We do software consulting agency that builds innovative solutions
              for better tomorrows!
            </p>
          </GridItem>
          <GridItem>
            <h3>How do we do it?</h3>
            <p>
              We empower our engineers to build creative technology solutions
              for optimizing the user experience for our clients.
            </p>
          </GridItem>
          <GridItem>
            <h3>What is your goal?</h3>
            <p>
              Our goal is to provide our clients with height quality sofware
              solutions on the market. We want to build scalable secure
              innovation technologies that enhance the customer experience.
            </p>
          </GridItem>
        </GridContainer>
        <BuildButtonContainer>
          <BuildButton href="#contact-us">Build with us!</BuildButton>
        </BuildButtonContainer>
      </AboutContainer>
    </motion.div>
  );
}
