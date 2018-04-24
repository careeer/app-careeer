import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Responsive } from 'semantic-ui-react';
import CreateForm from '../../Users/CreateForm';
import Plans from './Plans';
import CreateAccountButton from './CreateAccountButton';

const Pricing = props => (
  <Grid.Row className="pricing">
    <Grid.Column>
      <h2>
        Simple and flexible pricing
      </h2>
      <h3>
        Upgrade, downgrade, cancel at any time
      </h3>
      <h5>
        All plans include
      </h5>
      <ul>
        <li>one dedicated coach</li>
        <li>personalized career roadmap</li>
        <li>in-app messaging</li>
      </ul>
    </Grid.Column>
    <Grid.Column>
      <Plans
        selectedAccount={props.selectedAccount}
        handleSegmentClick={props.handleSegmentClick}
      />
      <CreateForm
        buttonLabel="START 7-DAY FREE TRIAL"
        selectedAccount={props.selectedAccount}
      />
    </Grid.Column>
    <Grid.Column textAlign="center">
      <Responsive maxWidth={669}>
        <CreateAccountButton
          buttonLabel="START 7-DAY FREE TRIAL"
          selectedAccount={props.selectedAccount}
        />
      </Responsive>
    </Grid.Column>
  </Grid.Row>
);

Pricing.propTypes = {
  selectedAccount: PropTypes.string.isRequired,
  handleSegmentClick: PropTypes.func.isRequired,
};

export default Pricing;
