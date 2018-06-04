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
            Sign up and choose where your roadmap begins, and
            when it ends. You might start with job search strategy,
            and continue to offer negotiation. Or, you may just
            sign up for a custom education plan to round out your
            skill set.
          </p>
          <p>
            Each week, you’ll complete tasks that move you towards your goal.
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
