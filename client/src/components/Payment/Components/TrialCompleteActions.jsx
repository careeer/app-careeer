/* eslint-disable */
import React from 'react';
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

export default TrialCompleteActions;