import React from 'react';
import Navigation from './components/navigation';
import styled from 'styled-components';

const Main = styled.main`
  padding: 35px;
  background: linear-gradient(180deg, #fed84b 0%, #fa7993 100%);
`;

const GridContainer = styled.div`
  display: flex;
`;

const GridItem = styled.div`
  flex 1;
  padding: 25px;
  transition: font-size 1s;

  &:hover {
    font-size: 20px;
  }
`;

export default () => {
  return (
    <div>
      <Navigation />
      <div style={{ display: 'flex;' }}>
        <Main>
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
        </Main>
      </div>
    </div>
  );
};
