import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const WelcomeToRoadmapMessage = () => (
  <Container
    text
    className="welcomeContainer"
  >
    <Header
      as="h2"
      className="welcomeHeader"
    >
      Welcome to Careeer.me
    </Header>
    <p className="welcomeContent">
      Let’s start with a little setup to become
      familiar with your roadmap, and introduce
      you to a coach.
    </p>
  </Container>
);

export default WelcomeToRoadmapMessage;
