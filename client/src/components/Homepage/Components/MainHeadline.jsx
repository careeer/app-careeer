import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Responsive } from 'semantic-ui-react';
import ScreensIcon from '../../Icons/ScreensIcon';
import CreateForm from '../../Users/CreateForm';
import CreateAccountButton from './CreateAccountButton';

const MainHeadline = props => (
  <Grid.Row className="mainHeadline">
    <Grid.Column>
      <h1>
        Ready to transition your career?
      </h1>
    </Grid.Column>
    <Grid.Column textAlign="center">
      <ScreensIcon />
      <h4>
        A personalized roadmap to get you from where you are, to the job you want in tech
      </h4>
      <p>
        Work with a coach for guidance and accountability
      </p>
      <CreateForm
        buttonLabel="START 7-DAY FREE TRIAL"
        selectedAccount={props.selectedAccount}
      />
    </Grid.Column>
    <Responsive maxWidth={669}>
      <Grid.Column>
        <CreateAccountButton
          buttonLabel="START 7-DAY FREE TRIAL"
          selectedAccount={props.selectedAccount}
        />
      </Grid.Column>
    </Responsive>
  </Grid.Row>
);

MainHeadline.propTypes = {
  selectedAccount: PropTypes.string.isRequired,
};

export default MainHeadline;
