import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer } from 'semantic-ui-react';
import FunniesComponent from './FunniesComponent';
import LoadingIcon from '../Icons/LoadingIcon';


export default function LoadingScreen(props) {
  return (
    <Dimmer
      page
      inverted
      className="loadingScreen"
      active={props.isLoading}
    >
      <LoadingIcon />
      <FunniesComponent interval={4000} />
    </Dimmer>
  );
}

LoadingScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
