import React from 'react';
import { Grid } from 'semantic-ui-react';

import RoadmapIcon from '../../Icons/RoadmapIcon';
import SupportIcon from '../../Icons/SupportIcon';
import TrainingIcon from '../../Icons/TrainingIcon';

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
        <div className="descriptionContainer">
          <p className="description">
            Get a step-by-step plan with a personalized career roadmap. And because we’ve been at this for 10+ years, we want to make sure you receive expert direction every step of the way.
          </p>
          <p>
            That’s why all of our packages include an expert coach that holds you accountable to your goal, and trainings that reframe the psychology of the new you.
          </p>
        </div>
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
      <Grid.Column textAlign="center" width="4">
        <RoadmapIcon />
      </Grid.Column>
      <Grid.Column textAlign="center" width="4">
        <SupportIcon />
      </Grid.Column>
      <Grid.Column textAlign="center" width="4">
        <TrainingIcon />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WhatWeDoSection;
