import React from 'react';
import { Grid } from 'semantic-ui-react';

import Milestones from '../../Icons/Milestones';
import MilestonesVertical from '../../Icons/MilestonesVertical';

const RoadmapSection = () => (
  <Grid stackable className="personalizedRoadmap">
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="14" className="sectionTitle">
        <header className="title">
          Roadmap
        </header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column only="computer" width="2" className="asideColumn" >
        <aside className="greenRectangle" />
      </Grid.Column>
      <Grid.Column width="6" className="ourMissionColumn">
        <aside className="greenInlineRectangle" />
        <h2 className="ourMission">
          Choose where you
          start, progress at
          your own pace
        </h2>
      </Grid.Column>
      <Grid.Column width="6">
        <section className="descriptionContainer">
          <p className="description">
            After your first coaching call, you’ll receive a step-by-step plan, monitored
            weekly for progress towards your ultimate goal. Your career roadmap is flexible, 
            taking into account your timeline, budget, and overall goals. 
          </p>
          <p>
            Your career roadmap will start in one of the following areas:
          </p>
        </section>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign="center">
        <Milestones />
        <MilestonesVertical />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default RoadmapSection;
