import React from 'react';
import { Grid } from 'semantic-ui-react';

const OnDemandCoachSection = () => (
  <Grid stackable className="onDemandCoachSection">
    <Grid.Row>
      <Grid.Column width="14" className="sectionTitle" textAlign="right">
        On-Demand Coach
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="3" />
      <Grid.Column width="5">
        <img
          alt="coach"
          src="http://res.cloudinary.com/careeer/image/upload/c_fill,g_face,r_max,h_350,w_350/v1523651321/profilepic_copy_lzzrgw.png"
        />
      </Grid.Column>
      <Grid.Column width="6">
        <div className="greenRectangle">
          Message your coach<br />
        </div>
        <h2 className="ourMission">
          anytime through the app
        </h2>
        <div className="descriptionContainer">
          <p className="description">
            No more doubting the right next step, how to
            follow-up after an interview, or how to rebrand your
            professional story.
          </p>
          <p>
            Our career coaches have industry experience and
            provide you with direction, focus, and confidence to
            boot. You can expect a personalized, real-talk
            approach as we collaborate to get you into your
            dream job in tech.
          </p>
        </div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2" />
    </Grid.Row>
  </Grid>
);

export default OnDemandCoachSection;
