import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

const LinkWrapper = styled.a`
  text-decoration: none;
  color: #0d0822ff;
`;

const LinkedText = styled.p`
  padding-top: 3px;
  margin: 0px;
`;

const ContactContainer = styled.div`
  padding: 35px;
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
      <ContactContainer>
        <h2 id="contact-us">Contact us</h2>
        <GridContainer>
          <GridItem>
            <LinkWrapper
              href="https://www.linkedin.com/in/benjamin-t-stafford"
              target="_blank"
            >
              <FontAwesomeIcon size="2xl" icon={faLinkedin} color="#0d0822ff" />
              <LinkedText>LinkedIn</LinkedText>
            </LinkWrapper>
          </GridItem>
          <GridItem>
            <LinkWrapper
              href="https://github.com/bstafford2017"
              target="_blank"
            >
              <FontAwesomeIcon size="2xl" icon={faGithub} color="#0d0822ff" />
              <LinkedText>GitHub</LinkedText>
            </LinkWrapper>
          </GridItem>
          <GridItem>
            <LinkWrapper href="mailto:ben@rezxak.com?subject=Let%27s%20get%20in%20touch%21">
              <FontAwesomeIcon size="2xl" icon={faEnvelope} color="#0d0822ff" />
              <LinkedText>Email</LinkedText>
            </LinkWrapper>
          </GridItem>
        </GridContainer>
      </ContactContainer>
    </motion.div>
  );
}
