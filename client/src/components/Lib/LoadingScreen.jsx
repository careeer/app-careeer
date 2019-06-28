import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer } from 'semantic-ui-react';

export default function LoadingScreen(props) {
  return (
    <Dimmer page inverted className="loadingScreen" active={props.isLoading}>
      <div style={{ diplay: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Loading...
      </div>
    </Dimmer>
  );
}

LoadingScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
