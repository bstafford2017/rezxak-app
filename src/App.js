import React from 'react';
import Navigation from './components/navigation';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGears,
  faMarker,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useScroll, motion } from 'framer-motion';

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fed84b 0%, #fa7993 100%);
`;

const Main = styled.main``;

const LinkWrapper = styled.a`
  text-decoration: none;
  color: #000;
`;

const LinkedText = styled.p`
  padding-top: 3px;
  margin: 0px;
`;

const AboutContainer = styled.div`
  padding: 35px;
`;

const ServicesContainer = styled.div`
  padding: 35px;
  background: #00000055;
`;

const ContactContainer = styled.div`
  padding: 35px;
`;

const ServicesItemHeading = styled.p`
  border-radius: 25px;
  border-width: 2px;
  border-style: solid;
  border-color: #fed84b;
  padding: 35px;
  color: #eee;
  background-color: #0d0821;
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
    background-color: #fdbc64;
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
`;

const Footer = styled.footer`
  color: #eee;
`;

const LogoAndText = styled.div`
  padding: 35px 75px;
`;

export default () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          height: '10px',
          background: 'linear-gradient(90deg, #fed84b 0%, #fa7993 100%)',
          transformOrigin: '0%',
        }}
      />
      <Navigation />
      <MainContainer>
        <Main>
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ repeatType: 'reverse' }}
            whileInView={{
              opacity: 1,
              y: -45,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          >
            <AboutContainer>
              <h2 id="about-us">About us</h2>
              <GridContainer>
                <GridItem>
                  <h3>What is Rezxak?</h3>
                  <p>We do software solutions for everyone!</p>
                </GridItem>
                <GridItem>
                  <h3>What is Rezxak?</h3>
                  <p>We do software solutions for everyone!</p>
                </GridItem>
                <GridItem>
                  <h3>What is Rezxak?</h3>
                  <p>We do software solutions for everyone!</p>
                </GridItem>
              </GridContainer>
              <BuildButtonContainer>
                <BuildButton href="#contact-us">Build with us!</BuildButton>
              </BuildButtonContainer>
            </AboutContainer>
          </motion.div>
          <ServicesContainer>
            <h2 id="services">Services</h2>
            <motion.div
              initial={{
                opacity: 0,
              }}
              transition={{ repeatType: 'reverse' }}
              whileInView={{
                opacity: 1,
                y: -45,
                transition: {
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <GridContainer>
                <GridItem>
                  <ServicesItemHeading>
                    <FontAwesomeIcon size="2xl" icon={faMarker} />
                    Web Design
                  </ServicesItemHeading>
                </GridItem>
                <GridItem>
                  We utilize web design principles to build the most efficient
                  and user-friendly patterns in the industry.
                </GridItem>
              </GridContainer>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              transition={{ repeatType: 'reverse' }}
              whileInView={{
                opacity: 1,
                y: -45,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true }}
            >
              <GridContainer>
                <GridItem>
                  We utilize web design principles to build the most efficient
                  and user-friendly patterns in the industry.
                </GridItem>
                <GridItem>
                  <ServicesItemHeading>
                    <FontAwesomeIcon size="2xl" icon={faGears} />
                    System Architecture Design
                  </ServicesItemHeading>
                </GridItem>
              </GridContainer>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              transition={{ repeatType: 'reverse' }}
              whileInView={{
                opacity: 1,
                y: -45,
                transition: {
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <GridContainer>
                <GridItem>
                  <ServicesItemHeading>
                    <FontAwesomeIcon size="2xl" icon={faMobile} />
                    Mobile Design
                  </ServicesItemHeading>
                </GridItem>
                <GridItem>
                  We utilize web design principles to build the most efficient
                  and user-friendly patterns in the industry.
                </GridItem>
              </GridContainer>
            </motion.div>
          </ServicesContainer>
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ repeatType: 'reverse' }}
            whileInView={{
              opacity: 1,
              y: -45,
              transition: {
                duration: 1,
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
                    <FontAwesomeIcon size="2xl" icon={faLinkedin} />
                    <LinkedText>LinkedIn</LinkedText>
                  </LinkWrapper>
                </GridItem>
                <GridItem>
                  <LinkWrapper
                    href="https://github.com/bstafford2017"
                    target="_blank"
                  >
                    <FontAwesomeIcon size="2xl" icon={faGithub} />
                    <LinkedText>GitHub</LinkedText>
                  </LinkWrapper>
                </GridItem>
                <GridItem>
                  <LinkWrapper href="mailto:ben@staffordsolutionsllc.com?subject=Let%27s%20get%20in%20touch%21">
                    <FontAwesomeIcon size="2xl" icon={faEnvelope} />
                    <LinkedText>Email</LinkedText>
                  </LinkWrapper>
                </GridItem>
              </GridContainer>
            </ContactContainer>
          </motion.div>
        </Main>
      </MainContainer>
      <Footer>
        <LogoAndText>
          <img width={100} height={100} src="./logo.png" alt="Rezxak logo" />
          <p>Rezxak, LLC 2024</p>
        </LogoAndText>
      </Footer>
    </div>
  );
};
