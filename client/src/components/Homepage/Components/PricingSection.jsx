import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import PricingPlans from './PricingPlans';

export default class PricingSection extends React.Component {
  state = { plan: 'Standard Track' }

  handlePlanClick = plan => this.setState({ plan });

  render() {
    const { plan } = this.state;

    return (
      <Grid stackable className="subscriptionSection">
        <Grid.Row>
          <Grid.Column width="14" className="sectionTitle" textAlign="right">
            Monthly Subscriptions
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="pricing">
          <Grid.Column width="2" only="computer" />
          <PricingPlans
            title="Fast Track"
            cost="599"
            active={plan === 'Fast Track'}
            firstDescription="(3) check-in calls"
            secondDescription="3 (30min) video or phone training"
            onPlanClick={this.handlePlanClick}
          />
          <PricingPlans
            title="Standard Track"
            cost="399"
            active={plan === 'Standard Track'}
            firstDescription="(2) check-in calls"
            secondDescription="2 (30min) video or phone training"
            onPlanClick={this.handlePlanClick}
          />
          <PricingPlans
            title="Self Starter"
            cost="199"
            active={plan === 'Self Starter'}
            firstDescription="(2) check-in calls"
            secondDescription="1 (30min) video or phone training"
            onPlanClick={this.handlePlanClick}
          />
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width="4" className="trialLink" textAlign="center">
            <button className="signUpLink">
              <Link to="/createAccount">
                Start 3 day Free Trial
              </Link>
            </button>
            <p>No credit card needed</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
