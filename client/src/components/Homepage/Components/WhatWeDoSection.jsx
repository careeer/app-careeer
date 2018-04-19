import React from 'react';
import { Grid } from 'semantic-ui-react';

const WhatWeDoSection = () => (
  <Grid stackable className="whatWeDo">
    <Grid.Row>
      <Grid.Column width="14" className="sectionTitle" textAlign="right">
        What We Do
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="6">
        <p className="description">
          Sign up to receive a free 20min call with a coach. During the sign-up
          call, you and your coach will establish where you are on your career
          path, narrow down your immediate goals, and learn how careeer.me can
          help. After your call, you’ll receive a step-by-step plan (we call it
          a roadmap),monitored and updated weekly by your coach.
        </p>
        <p>
          Each package includes a roadmap, on-demand support from your career
          coach, and trainings that help you reframe your mindset to help you achieve your goals.
        </p>
      </Grid.Column>
      <Grid.Column width="6">
        <h2 className="ourMission">
          Go from the job <br />
          you’re in, to the job <br />
        </h2>
        <div className="greenRectangle">
          &nbsp;you want in tech
        </div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2" />
    </Grid.Row>
  </Grid>
);

export default WhatWeDoSection;
