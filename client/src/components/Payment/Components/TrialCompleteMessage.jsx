/* eslint-disable */
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const TrialCompleteMessage = props => (
  <div className="messageBody">
    <h1 className="introHeader">
      Congratulations {props.clientName}!
    </h1>
    <Image
      alt="avatar"
      avatar
      className="avatar"
      src={props.avatarUrl || "https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png"}
    />
    <h2 className="introMessage">
      You <span>completed {props.completeActions} {props.completeActions > 1 ? 'actions' : 'action'}</span> with your coach during your free trial.
    </h2>
    <p>
      Continue pursuing your goal with Careeer.me
    </p>
  </div>
);

export default TrialCompleteMessage;
