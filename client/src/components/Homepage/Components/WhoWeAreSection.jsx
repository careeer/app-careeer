import React from 'react';
import { Grid } from 'semantic-ui-react';

const WhoWeAreSection = () => (
  <Grid stackable className="whoWeAre">
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="14" className="sectionTitle">
        Who We Are
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column only="computer" width="2">
        <div className="greenRectangle" />
      </Grid.Column>
      <Grid.Column width="6">
        <div className="greenInlineRectangle" />
        <h2 className="ourMission">
          Our mission is to make technology careers accessible
          to everyone.
        </h2>
      </Grid.Column>
      <Grid.Column width="6">
        <p className="description">
          At Careeer.me, we know what it’s like to change your
          career from non-tech to tech. We have experienced
          the process ourselves, and found that it was like
          trudging through mud. Up a mountain. With rain.
        </p>
        <p>
          Having coached hundreds of working professionals, we
          have learned that the following 3 pieces are usually
          missing:
        </p>
        <p className="improvementAreas">
          <span>1. Direction</span> <br />
          &nbsp;“I know what I want, but how do I get there?” <br />
          <br />
          <span>2. Expertise</span> <br />
          &nbsp;“I want to talk to somebody who works in the field” <br />
          <br />
          <span>3. Accountability</span> <br />
          &nbsp;“I get bored/sidetracked/apathetic” <br />
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WhoWeAreSection;
