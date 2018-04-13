import React from 'react';
import { Grid } from 'semantic-ui-react';

const OnDemandCoachSection = () => (
  <Grid columns="equal" className="onDemandCoachSection">
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
          anytime through the<br />
          app
        </h2>
        <p className="description">
          No more doubting the right next step, how to<br />
          follow-up after an interview, or how to rebrand your<br />
          professional story.
        </p>
        <p>
          Our career coaches have industry experience and<br />
          provide you with direction, focus, and confidence to<br />
          boot. You can expect a personalized, real-talk<br />
          approach as we collaborate to get you into your<br />
          dream job in tech.
        </p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2" />
    </Grid.Row>
  </Grid>
);

export default OnDemandCoachSection;
