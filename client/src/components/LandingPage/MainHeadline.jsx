import React from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import ScreensIcon from '../Icons/ScreensIcon';
import CreateForm from '../Users/CreateForm';
import CreateAccountButton from './CreateAccountButton';

const MainHeadline = () => (
  <Grid.Row className="mainHeadline">
    <Grid.Column>
      <h1>
        YOU’RE IN CONTROL HERE
      </h1>
    </Grid.Column>
    <Grid.Column textAlign="center">
      <ScreensIcon />
      <h4>
        Create intelligent plans that power your career moves
      </h4>
      <p>
        Connect to professional coaches for guidance and accountability along the way
      </p>
      <CreateForm buttonLabel="START 7-DAY FREE TRIAL" />
    </Grid.Column>
    <Responsive maxWidth={669}>
      <Grid.Column>
        <CreateAccountButton buttonLabel="START 7-DAY FREE TRIAL" />
      </Grid.Column>
    </Responsive>
  </Grid.Row>
);

export default MainHeadline;
