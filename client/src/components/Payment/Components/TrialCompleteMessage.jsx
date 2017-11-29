/* eslint-disable */
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const TrialCompleteMessage = props => (
  <div className="messageBody">
    <h1 className="introHeader">
      Congratulations Tiffany!
    </h1>
    <Image
      alt="avatar"
      avatar
      className="avatar"
      src={"https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png"}
    />
    <h2 className="introMessage">
    You completed 7 actions with your coach during your free trial.

    </h2>
    <p>
      Continue pursuing your goal with Careeer.me
    </p>
  </div>
);

export default TrialCompleteMessage;
