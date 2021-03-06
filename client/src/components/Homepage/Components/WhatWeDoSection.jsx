import React from 'react';
import { Grid } from 'semantic-ui-react';

import RoadmapIcon from '../../Icons/RoadmapIcon';
import SupportIcon from '../../Icons/SupportIcon';
import TrainingIcon from '../../Icons/TrainingIcon';

const WhatWeDoSection = () => (
  <Grid stackable className="whatWeDo">
    <Grid.Row>
      <Grid.Column width="14" className="sectionTitle" textAlign="right">
        <div className="title">What We Do</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column only="computer" width="2" />
      <Grid.Column width="6">
        <div className="descriptionContainer">
          <p className="description">
            Work 1:1 with your own tech career coach and receive weekly support
            via phone, video, and slack.
          </p>
          <p>
            Our approach is humanistic and strategic: We take the time to
            understand you as a person, to assess your skill-set as a
            professional, and to provide custom training in areas such as
            interview skills, pitching, job search strategy, and professional
            branding.
          </p>
          <p style={{ fontWeight: 'bold' }}>
            We consistently work with freelancers, seasoned technologists, and
            career transitioners.
          </p>
        </div>
      </Grid.Column>
      <Grid.Column width="6" className="ourMissionColumn">
        <h2 className="ourMission">
          Go from the job <br />
          you’re in, to the job <br />
        </h2>
        <div className="greenRectangle">&nbsp;you want in tech</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column textAlign="center" width="4">
        <RoadmapIcon />
        <h6 className="iconHeader">Roadmap</h6>
        <p className="iconDescription">
          Weekly steps to get into your next job
        </p>
      </Grid.Column>
      <Grid.Column textAlign="center" width="4">
        <SupportIcon />
        <h6 className="iconHeader">Dedicated coach</h6>
        <p className="iconDescription">
          Chat with your coach weekly via slack, phone, and email
        </p>
      </Grid.Column>
      <Grid.Column textAlign="center" width="4">
        <TrainingIcon />
        <h6 className="iconHeader">Training</h6>
        <p className="iconDescription">
          Rebrand yourself - Learn to communicate your story and transferable
          skills
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WhatWeDoSection;
