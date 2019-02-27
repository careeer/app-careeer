import React from 'react';
import { Grid } from 'semantic-ui-react';

const OnDemandCoachSection = () => (
  <Grid stackable className="onDemandCoachSection">
    <Grid.Row>
      <Grid.Column width="14" className="sectionTitle" textAlign="right">
        <div className="title">Career Coach</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column only="computer" width="2" />
      <Grid.Column width="6">
        <img
          alt="coach"
          className="coachAvatar"
          src="https://res.cloudinary.com/careeer/image/upload/c_fill,g_face,r_max,h_350,w_350/v1523651321/profilepic_copy_lzzrgw.png"
        />
      </Grid.Column>
      <Grid.Column width="6" className="ourMissionColumn">
        <div className="greenRectangle">
          Message your coach
          <br />
        </div>
        <h2 className="ourMission">through phone, slack or email</h2>
        <div className="descriptionContainer">
          <p className="description">
            Our customers often have questions at random times, and not everyone
            has the network or a mentor to give them career advice
            <i> when they need it</i>. Get your questions answered any day of
            the work week. Oftentimes, you’ll receive an answer within 1-2
            hours.
          </p>
          <p>
            <strong>Some of those random questions might be:</strong>
          </p>
          <ul>
            <li>How do I pitch my transferable skills?</li>
            <li>Does this line in my resume make sense?</li>
            <li>I have an interview with a recruiter in two hours. Help!</li>
          </ul>
        </div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2" />
    </Grid.Row>
  </Grid>
);

export default OnDemandCoachSection;
