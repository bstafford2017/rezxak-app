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
  background: linear-gradient(180deg, #fff 0%, #aaa 100%);
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
  background: #00000015;
`;

const ServicesIcon = styled(FontAwesomeIcon)`
  padding-right: 15px;
`;

const ContactContainer = styled.div`
  padding: 35px;
`;

const ServicesItemHeading = styled.p`
  border-width: 2px;
  border-style: solid;
  padding: 35px;
  color: white;
  background-color: #000;
  border-image: linear-gradient(180deg, #fed84b 0%, #fa7993 100%) 1;
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
              y: 0,
              transition: {
                duration: 1.5,
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
                    We do software consulting agency that builds innovative
                    solutions for better tomorrows!
                  </p>
                </GridItem>
                <GridItem>
                  <h3>How do we do it?</h3>
                  <p>
                    We empower our engineers to build creative technology
                    solutions for optimizing the user experience for our
                    clients.
                  </p>
                </GridItem>
                <GridItem>
                  <h3>What is your goal?</h3>
                  <p>
                    Our goal is to provide our clients with height quality
                    sofware solutions on the market. We want to build scalable
                    secure innovation technologies that enhance the customer
                    experience.
                  </p>
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
                y: -0,
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
                y: -0,
                transition: {
                  duration: 2,
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
                    <ServicesIcon size="2xl" icon={faGears} />
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
                y: -0,
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
              y: -0,
              transition: {
                duration: 1.5,
              },
            }}
            viewport={{ once: true }}
          >
            <ContactContainer>
              <h2 id="talent">Our talent</h2>
              <GridContainer>
                <GridItem>
                  <img
                    style={{
                      borderRadius: '15px',
                      marginTop: '25px',
                      border: '2px solid #333',
                      width: '100%',
                      height: 'auto',
                    }}
                    src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/274665396_5190147497665012_453686274030750986_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BTQXD9oMTfgQ7kNvgGivZ5_&_nc_ht=scontent-ord5-2.xx&cb_e2o_trans=q&oh=00_AYBIoQNN-LODtkV5Mx0pvF9yw3hQ03uzoJwE-zsQn-g6rg&oe=66C4A85B"
                    alt="Picture of Benjamin Stafford"
                  />
                </GridItem>
                <GridItem style={{ textAlign: 'left' }}>
                  <h3 style={{ paddingTop: '25px', fontStyle: 'bold' }}>
                    Benjamin Stafford
                  </h3>
                  <p style={{ fontStyle: 'italic' }}>Founder, CEO of Rezxak</p>
                  <p style={{ paddingTop: '15px' }}>
                    Benjamin Stafford grew up in Kasson, MN - a small town
                    outside of Rochester, MN. In 2020, he graduated from the
                    University of North Dakota with a Bachelors of Science in
                    Computer Science and a minor in Mathematics. After college,
                    he accepted a position at Securian Finacial as an software
                    engineer where he worked the external customer portal site
                    for the RMT (Retail Market Technology) division. Securian
                    AWS migration in 2021 enabled his success as a cloud
                    developer. This initative allowed him to focus on building
                    microservice REST architecture on the AWS platform.
                  </p>
                  <p style={{ paddingTop: '15px' }}>
                    Ben is known for his relentless focus on implementing
                    innovative technologies to improve the user experience. His
                    key accomplishments include implementing the first
                    production-grade GraphQL in RMT and introducing
                    microfrontend architecture at Securian Financial.
                  </p>
                  <p style={{ paddingTop: '15px' }}>
                    During 2024, Ben started Rezxak where he dedicates his time
                    on sofware engineering consulting.
                  </p>
                </GridItem>
              </GridContainer>
            </ContactContainer>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ repeatType: 'reverse' }}
            whileInView={{
              opacity: 1,
              y: -0,
              transition: {
                duration: 1.5,
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
