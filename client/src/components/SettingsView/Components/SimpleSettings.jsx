import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const SimpleSettings = props => (
  <div className="settingsLayout">
    <div className="messageBody simpleSettings">
      <Button
        content="Log out"
        className="changeSubscriptionButton"
        onClick={props.onSignOutClick}
      />
    </div>
  </div>
);

SimpleSettings.propTypes = {
  onSignOutClick: PropTypes.func.isRequired,
};

export default SimpleSettings;
