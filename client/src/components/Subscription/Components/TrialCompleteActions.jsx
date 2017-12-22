import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const TrialCompleteActions = props => (
  <div className="callToAction">
    <Button
      content="Continue"
      className="defaultButton"
      onClick={props.handleContinueClick}
    />
    <p>
      Don&apos;t want to continue?
    </p>
    <a
      role="link"
      tabIndex={0}
      onClick={props.handleDeleteAccount}
    >
      Delete account
    </a>
  </div>
);

TrialCompleteActions.propTypes = {
  handleContinueClick: PropTypes.func.isRequired,
  handleDeleteAccount: PropTypes.func.isRequired,
};

export default TrialCompleteActions;
