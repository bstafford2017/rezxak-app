import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Profile from '../../public/profile.jpg';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GridItem = styled.div`
  flex: 1;
  text-align: center;
  min-width: 200px;
  padding: 0px 25px;
`;

const Container = styled.div`
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
      <Container>
        <h2 id="talent">Our talent</h2>
        <GridContainer style={{ padding: '25px' }}>
          <GridItem>
            <img
              style={{
                borderRadius: '15px',
                marginTop: '25px',
                border: '2px solid #333',
                width: '100%',
                height: 'auto',
              }}
              src={Profile}
              alt="Picture of Benjamin Stafford"
            />
          </GridItem>
          <GridItem style={{ textAlign: 'left' }}>
            <h3 style={{ fontStyle: 'bold' }}>Benjamin Stafford</h3>
            <p style={{ fontStyle: 'italic' }}>Founder, CEO of Rezxak</p>
            <p style={{ paddingTop: '15px' }}>
              Benjamin Stafford grew up in Kasson, MN - a small town outside of
              Rochester, MN. In 2020, he graduated from the University of North
              Dakota with a Bachelors of Science in Computer Science and a minor
              in Mathematics.
            </p>
            <p style={{ paddingTop: '15px' }}>
              After college, he accepted a position at Securian Finacial as a
              software engineer where he worked the external customer portal
              site for the RMT (Retail Market Technology) division. Securian AWS
              migration in 2021 enabled his success as a cloud developer. This
              initative allowed him to focus on building microservice REST
              architecture on the AWS platform.
            </p>
            <p style={{ paddingTop: '15px' }}>
              Ben is known for his relentless focus on implementing innovative
              technologies to improve the user experience. His key
              accomplishments include implementing the first production-grade
              GraphQL in RMT and introducing microfrontend architecture at
              Securian Financial.
            </p>
            <p style={{ paddingTop: '15px' }}>
              During 2024, Ben started Rezxak where he dedicates his time on
              sofware engineering consulting.
            </p>
          </GridItem>
        </GridContainer>
      </Container>
    </motion.div>
  );
}
