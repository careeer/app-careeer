/* eslint-disable */
import React from 'react';
import { Button } from 'semantic-ui-react';

const TrialCompleteActions = props => (
  <div className="callToAction">
    <Button className="defaultButton"> Continue </Button>
    <p>
      Don't want to continue?
    </p>
    <a>
      Delete account
    </a>
  </div>
);

export default TrialCompleteActions;
