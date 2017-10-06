import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import CheckmarkIcon from './CheckmarkIcon';

const ThankYouMessage = props => (
  <Grid textAlign="center">
    <Grid.Column className="thankYouMessageGrid">
      <h2 className="thankYouHeader">
        That was fun!
      </h2>
      <p className="thankYouMessage">
        Thanks for letting us get to know
        you better, {props.clientName}.
      </p>
      <CheckmarkIcon className="thankYouCheckmark" />
      <p className="thankYouLoading">
        Building your roadmap...
      </p>
    </Grid.Column>
  </Grid>
);

ThankYouMessage.propTypes = {
  clientName: PropTypes.string.isRequired,
};

export default ThankYouMessage;
