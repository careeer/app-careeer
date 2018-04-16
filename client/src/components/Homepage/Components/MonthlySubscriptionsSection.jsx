import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

const MonthlySubscriptionsSection = () => (
  <Grid columns="equal" className="subscriptionSection">
    <Grid.Row>
      <Grid.Column width="14" className="sectionTitle" textAlign="right">
        Monthly Subscriptions
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="4">
        <div className="monthlyPlan">
          <h4>
            Self Starter
          </h4>
          <p>
            $100 per month
          </p>
          <p>
            On-demand coach
            Personalized roadmap
            Limited in-app messaging
          </p>
        </div>
      </Grid.Column>
      <Grid.Column width="4">
        <div className="monthlyPlan">
          <h4>
            Standard Track
          </h4>
          <p>
            $200 per month
          </p>
          <p>
            On-demand coach
            Personalized roadmap
            Limited in-app messaging
          </p>
        </div>
      </Grid.Column>
      <Grid.Column width="4">
        <div className="monthlyPlan">
          <h4>
            Fast Track
          </h4>
          <p>
            $300 per month
          </p>
          <p>
            On-demand coach
            Personalized roadmap
            Limited in-app messaging
          </p>
        </div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered>
      <Grid.Column width="4">
        <button className="signUpLink">
          <Link to="/signUp">
            Start 7-day Free Trial
          </Link>
        </button>
        <p>
          No credit card needed
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default MonthlySubscriptionsSection;
