import React from 'react';
import { Segment, Label } from 'semantic-ui-react';

const Plans = () => (
  <div className="plans">
    <Segment padded color="violet">
      <header>Fast Track</header>
      <p>$350/<span>month</span></p>
      <div className="planDescription">+2 hours of voice and video with your coach</div>
    </Segment>
    <Segment padded color="green">
      <Label attached="top" content="free trials start here" />
      <header>Standard track</header>
      <p>$150/<span>month</span></p>
      <div className="planDescription">+1 hours of voice and video with your coach</div>
    </Segment>
    <Segment padded color="yellow">
      <header>Self starter</header>
      <p>$50/<span>month</span></p>
      <div className="planDescription">Dedicated coach, personalized roadmap, and unlimited messaging</div>
    </Segment>
  </div>
);

export default Plans;
