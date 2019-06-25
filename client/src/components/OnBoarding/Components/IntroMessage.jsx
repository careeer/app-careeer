import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import WaveIcon from '../../Icons/WaveIcon';
import PageHeader from './PageHeader';

const IntroMessage = props => (
  <Grid textAlign="center" className="introMessageGrid">
    <div className="row pageHeader">
      <PageHeader
        icon={false}
        counterLabel="1/5"
        handleClick={props.handleClick}
        headerLinkLabel=""
      />
    </div>
    <Grid.Column className="introMessageGrid">
      <h2 className="introHeader">Hello!</h2>
      <p className="introMessage">
        In order to improve your experience we’d like to get to know you better.
      </p>
      <p className="introMessage">
        We have 4 questions that will help us narrow things down a bit!
      </p>
      <a tabIndex={0} role="button" onClick={props.onStartClick}>
        <WaveIcon />
      </a>
      <a tabIndex={0} role="button" className="introGetStarted" onClick={props.onStartClick}>
        Get Started
      </a>
    </Grid.Column>
  </Grid>
);

IntroMessage.propTypes = {
  onStartClick: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default IntroMessage;
