import React from 'react';
import { Grid } from 'semantic-ui-react';

import Milestones from '../../Icons/Milestones';

const PersonalizedRoadmapSection = () => (
  <Grid stackable className="personalizedRoadmap">
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="14" className="sectionTitle">
        Personalized Roadmap
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column only="computer" width="2" >
        <div className="greenRectangle" />
      </Grid.Column>
      <Grid.Column width="6">
        <h2 className="ourMission">
          Choose where you
          start, progress at
          your own pace
        </h2>
      </Grid.Column>
      <Grid.Column width="6">
        <div className="descriptionContainer">
          <p className="description">
            A step-by-step plan, co-created by you and your coach, monitored
            weekly for progress towards your goal. Your roadmap is flexible,
            taking into account your timeline, budget, and overall goals.
          </p>
          <p>
            When you sign up, you’ll start your roadmap in one of the following areas:
          </p>
        </div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign="center">
        <Milestones />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default PersonalizedRoadmapSection;
