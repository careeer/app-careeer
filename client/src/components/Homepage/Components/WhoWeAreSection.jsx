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
        <h2 className="ourMission">
          <span> Our mission </span> is to make technology careers accessible
          to everyone.
        </h2>
      </Grid.Column>
      <Grid.Column width="6">
        <p className="description">
          At careeer.me, we know what it’s like to change your <br />
          career from non-tech to tech. We have experienceed <br />
          the process ourselves, and found that it was like <br />
          trudging through mud. Up a mountain. With rain.
        </p>
        <p>
          Having worked with hundreds of working <br />
          professionals as they transition their careers we’ve <br />
          learned a few things:
        </p>
        <p className="improvementAreas">
          <span>1. Direction is usually missing</span> <br />
          &nbsp;“I know what I want, but how do I get there?” <br />
          <br />
          <span>2. Mentorship</span> <br />
          &nbsp;“I want to talk to somebody who works in the field” <br />
          <br />
          <span>3. Accountability</span> <br />
          &nbsp;“I get bored/sidetracked/stop caring/apathetic” <br />
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WhoWeAreSection;
