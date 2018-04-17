import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

const MonthlySubscriptionsSection = () => (
  <Grid stackable className="subscriptionSection">
    <Grid.Row>
      <Grid.Column width="14" className="sectionTitle" textAlign="right">
        Monthly Subscriptions
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="4" textAlign="center">
        <div className="monthlyPlan">
          <h4>
            Self Starter
          </h4>
          <h5>
            $100 <span>per month</span>
          </h5>
          <ul>
            <li>On-demand coach</li>
            <li>Personalized roadmap</li>
            <li>Limited in-app messaging</li>
          </ul>
        </div>
      </Grid.Column>
      <Grid.Column width="4" textAlign="center">
        <div className="monthlyPlan">
          <h4>
            Standard Track
          </h4>
          <h5>
            $200 <span>per month</span>
          </h5>
          <ul>
            <li>On-demand coach</li>
            <li>Personalized roadmap</li>
            <li>Unlimited in-app messaging</li>
            <li>1hr coach call/month</li>
          </ul>
        </div>
      </Grid.Column>
      <Grid.Column width="4" textAlign="center">
        <div className="monthlyPlan">
          <h4>
            Fast Track
          </h4>
          <h5>
            $300 <span>per month</span>
          </h5>
          <ul>
            <li>On-demand coach</li>
            <li>Personalized roadmap</li>
            <li>Unlimited in-app messaging</li>
            <li>2hrs coach call/month</li>
          </ul>
        </div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered>
      <Grid.Column width="4" className="trialLink" textAlign="center">
        <button className="signUpLink">
          <Link to="/signUp">
            Start 7-day Free Trial
          </Link>
        </button>
        <p>No credit card needed</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default MonthlySubscriptionsSection;
