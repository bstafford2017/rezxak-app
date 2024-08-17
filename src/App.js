import React from 'react';
import Navigation from './components/navigation';
import styled from 'styled-components';
import Services from './components/services';
import Talent from './components/talent';
import ProgressBar from './components/progress-bar';
import AboutUs from './components/about-us';
import Footer from './components/footer';
import ContactUs from './components/contact';

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fff 0%, #aaa 100%);
`;

const Main = styled.main``;

export default () => {
  return (
    <div>
      <ProgressBar />
      <Navigation />
      <MainContainer>
        <Main>
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
