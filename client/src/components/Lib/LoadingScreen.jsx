import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer } from 'semantic-ui-react';
import LoadingIcon from '../Icons/LoadingIcon';

export default function LoadingScreen(props) {
  return (
    <Dimmer
      page
      inverted
      className="loadingScreen"
      active={true && props.isLoading}
    >
      <LoadingIcon />
    </Dimmer>
  );
}


LoadingScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
