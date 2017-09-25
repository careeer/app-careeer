import React from 'react';
import PropTypes from 'prop-types';

import { Dimmer, Loader } from 'semantic-ui-react';

function FullScreenLoader(props) {
  return (
    <Dimmer
      active={true && props.isLoading}
      page
      inverted
    >
      <Loader size="medium">
        {props.loadingMessage}
      </Loader>
    </Dimmer>
  );
}

FullScreenLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingMessage: PropTypes.string.isRequired,
};

export default FullScreenLoader;
