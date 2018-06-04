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
      <Grid.Column only="computer" width="2" />
      <Grid.Column width="6">
        <div className="descriptionContainer">
          <p className="description">
            Gcareeer.me is a career development platform that
            provides personalized, focused mentorship for
            people transitioning their career into the technology industry.
          </p>
          <p>
            Our software delivers on-demand coaching, career
            skill development, and weekly goal monitoring.
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
        <h6 className="iconHeader">
          Roadmap
        </h6>
        <p className="iconDescription">
          Weekly steps to get into your next job
        </p>
      </Grid.Column>
      <Grid.Column textAlign="center" width="4">
        <SupportIcon />
        <h6 className="iconHeader">
          On-demand support
        </h6>
        <p className="iconDescription">
          Your own dedicated career coach is available to chat via messenger anytime of the week
        </p>
      </Grid.Column>
      <Grid.Column textAlign="center" width="4">
        <TrainingIcon />
        <h6 className="iconHeader">
          Training
        </h6>
        <p className="iconDescription">
          Reframe your psychology and change your lens
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WhatWeDoSection;
