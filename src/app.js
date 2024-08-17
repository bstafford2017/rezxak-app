import React from 'react';
import Navigation from './components/navigation';
import styled from 'styled-components';
import Services from './components/services';
import Talent from './components/talent';
import ProgressBar from './components/progress-bar';
import AboutUs from './components/about-us';
import Footer from './components/footer';
import ContactUs from './components/contact';
import Welcome from './components/welcome';

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fff 0%, #aaa 100%);
`;

const Main = styled.main`
  @media screen and (min-width: 640px) {
    & > * {
      padding: 35px 150px;
    }
  }
`;

export default () => {
  return (
    <div>
      <ProgressBar />
      <Navigation />
      <MainContainer>
        <Main>
          <Welcome />
          <AboutUs />
          <Services />
          <Talent />
          <ContactUs />
        </Main>
      </MainContainer>
      <Footer />
    </div>
  );
};
