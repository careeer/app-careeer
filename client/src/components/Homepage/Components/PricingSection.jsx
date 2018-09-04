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
            title="Self Starter"
            cost="150"
            active={plan === 'Self Starter'}
            firstDescription="30 min/week in-app coaching"
            secondDescription="(1) 30 min call/month"
            onPlanClick={this.handlePlanClick}
          />
          <PricingPlans
            title="Standard Track"
            cost="300"
            active={plan === 'Standard Track'}
            firstDescription="1 hr/week in-app coaching"
            secondDescription="(2) 30 min calls/month"
            onPlanClick={this.handlePlanClick}
          />
          <PricingPlans
            title="Fast Track"
            cost="500"
            active={plan === 'Fast Track'}
            firstDescription="Unlimited weekly in-app coaching"
            secondDescription="(3) 30 min calls/month"
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
