import React from 'react';
import styled from 'styled-components';
import AWS from '../../public/aws.png';
import GraphQL from '../../public/graphql.png';
import JS from '../../public/javascript.png';
import TS from '../../public/typescript.png';
import Node from '../../public/node.png';
import K8 from '../../public/kubernetes.png';
import ReactLogo from '../../public/react.png';
import Babel from '../../public/babel.png';
import Serverless from '../../public/serverless.png';
import Webpack from '../../public/webpack.png';
import Redux from '../../public/redux.png';
import Css from '../../public/css.png';
import NPM from '../../public/npm.png';
import HTML from '../../public/html.png';
import Material from '../../public/material.png';
import Boostrap from '../../public/bootstrap.png';

const Container = styled.div`
  padding: 0px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  margin: auto;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: '';
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  display: flex;
  width: calc(200px * 16);

  animation: slide 30s infinite linear;

  @keyframes slide {
    0% {
      transform: translateX(-250px);
    }
    100% {
      transform: translateX(calc(-200px * 12));
    }
  }
`;

const Image = styled.img`
  margin: 0px 50px;
  flex-wrap: nowrap;
  width: 150px;
  height: 150px;
`;

export default function () {
  return (
    <Container>
      <h2 id="technologies">Technologies</h2>
      <ImageContainer>
        <Image src={ReactLogo} />
        <Image src={GraphQL} />
        <Image src={Node} />
        <Image src={AWS} />
        <Image src={TS} />
        <Image src={JS} />
        <Image src={K8} />
        <Image src={Babel} />
        <Image src={Serverless} />
        <Image src={Redux} />
        <Image src={Webpack} />
        <Image src={Css} />
        <Image src={NPM} />
        <Image src={HTML} />
        <Image src={Material} />
        <Image src={Boostrap} />
      </ImageContainer>
    </Container>
  );
}
