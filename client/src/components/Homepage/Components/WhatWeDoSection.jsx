import React from 'react';
import { Grid } from 'semantic-ui-react';

const WhatWeDoSection = () => (
  <Grid columns="equal" className="whatWeDo">
    <Grid.Row>
      <Grid.Column width="14" className="sectionTitle" textAlign="right">
        What We Do
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="6">
        <p className="description">
          Get a step-by-step plan with a personalized career <br />
          roadmap. And because we’ve been at this for 10+ years, <br />
          we want to make sure you receive expert direction every <br />
          step of the way.
        </p>
        <p>
          That’s why all of our packages include an expert <br />
          coach that holds you accountable to your goal, and <br />
          trainings that reframe the psychology of the new you.
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
