import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { faGears, faMarker, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesContainer = styled.div`
  padding: 35px;
  background: #00000015;
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
`;

const ServicesIcon = styled(FontAwesomeIcon)`
  padding-right: 15px;
`;

const ServicesItemHeading = styled.p`
  border-width: 6px;
  border-style: solid;
  padding: 35px;
  color: white;
  background-color: #000;
  border-image: linear-gradient(180deg, #fed84b 0%, #fa7993 100%) 1;
`;

export default function () {
  return (
    <ServicesContainer>
      <h2 id="services">Services</h2>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        transition={{ repeatType: 'reverse' }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <GridContainer>
          <GridItem>
            <ServicesItemHeading>
              <ServicesIcon size="2xl" icon={faMarker} />
              Web Design
            </ServicesItemHeading>
          </GridItem>
          <GridItem>
            We utilize web design principles to build the most efficient and
            user-friendly patterns in the industry.
          </GridItem>
        </GridContainer>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        transition={{ repeatType: 'reverse' }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <GridContainer>
          <GridItem>
            We utilize web design principles to build the most efficient and
            user-friendly patterns in the industry.
          </GridItem>
          <GridItem>
            <ServicesItemHeading>
              <ServicesIcon size="2xl" icon={faGears} />
              System Architecture Design
            </ServicesItemHeading>
          </GridItem>
        </GridContainer>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        transition={{ repeatType: 'reverse' }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <GridContainer>
          <GridItem>
            <ServicesItemHeading>
              <ServicesIcon size="2xl" icon={faMobile} />
              Mobile Design
            </ServicesItemHeading>
          </GridItem>
          <GridItem>
            We utilize web design principles to build the most efficient and
            user-friendly patterns in the industry.
          </GridItem>
        </GridContainer>
      </motion.div>
    </ServicesContainer>
  );
}
