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
        <h4 className="planTitle">
          Self Starter
        </h4>
        <div className="monthlyPlan">
          <h5 className="planCost">
            $150 <span>per month</span>
          </h5>
          <ul className="planDescription">
            <li>30 min/week in-app coaching</li>
            <li>(1) 30 min call/month</li>
            <li>Personalized Roadmap</li>
          </ul>
        </div>
      </Grid.Column>
      <Grid.Column width="4" textAlign="center">
        <h4 className="planTitle">
          Standard Track
        </h4>
        <div className="monthlyPlan">
          <h5 className="planCost">
            $300 <span>per month</span>
          </h5>
          <ul className="planDescription">
            <li>1 hr/week in-app coaching</li>
            <li>(3) 30 min calls/month</li>
            <li>Personalized Roadmap</li>
          </ul>
        </div>
      </Grid.Column>
      <Grid.Column width="4" textAlign="center">
        <h4 className="planTitle">
          Fast Track
        </h4>
        <div className="monthlyPlan">
          <h5 className="planCost">
            $500 <span>per month</span>
          </h5>
          <ul className="planDescription">
            <li>Unlimited weekly in-app coaching</li>
            <li>(4) 30 min calls/month</li>
            <li>Personalized Roadmap</li>
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
