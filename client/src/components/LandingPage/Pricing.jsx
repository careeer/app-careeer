import React from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import CreateForm from '../Users/CreateForm';
import Plans from './Plans';
import CreateAccountButton from './CreateAccountButton';

const Pricing = () => (
  <Grid.Row className="pricing">
    <Grid.Column>
      <h2>
        Simple and flexible pricing
      </h2>
      <h3>
        Upgrade, downgrade, pause, cancel at any time
      </h3>
      <h5>
        All plans include
      </h5>
      <ul>
        <li>one dedicated coach</li>
        <li>personalized career roadmap</li>
        <li>unlimited messaging</li>
      </ul>
    </Grid.Column>
    <Grid.Column>
      <Plans />
      <CreateForm buttonLabel="START 7-DAY FREE TRIAL" />
    </Grid.Column>
    <Grid.Column textAlign="center">
      <Responsive maxWidth={669}>
        <CreateAccountButton buttonLabel="START 7-DAY FREE TRIAL" />
      </Responsive>
    </Grid.Column>
  </Grid.Row>
);

export default Pricing;
