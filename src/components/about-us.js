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
  min-width: 200px;
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
    <AboutContainer>
      <h2 id="about-us">About us</h2>
      <GridContainer>
        <GridItem>
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
            <h3>What is Rezxak?</h3>
            <p>
              We do software consulting agency that builds innovative solutions
              for better tomorrows!
            </p>
          </motion.div>
        </GridItem>
        <GridItem>
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
            <h3>How do we do it?</h3>
            <p>
              We empower our engineers to build creative technology solutions
              for optimizing the user experience for our clients.
            </p>
          </motion.div>
        </GridItem>
        <GridItem>
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
            <h3>What is your goal?</h3>
            <p>
              Our goal is to provide our clients with height quality sofware
              solutions on the market. We want to build scalable secure
              innovation technologies that enhance the customer experience.
            </p>
          </motion.div>
        </GridItem>
      </GridContainer>
      <BuildButtonContainer>
        <BuildButton href="mailto:ben@rezxak.com?subject=Let%27s%20get%20in%20touch%21">
          Build with us!
        </BuildButton>
      </BuildButtonContainer>
    </AboutContainer>
  );
}
