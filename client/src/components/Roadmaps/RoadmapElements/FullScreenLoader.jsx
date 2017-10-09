import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import ThankYouMessage from '../../OnBoarding/Components/ThankYouMessage';
import '../Styles/FullScreenLoader.css';

function FullScreenLoader(props) {
  if (props.firstTime) {
    return (
      <Dimmer
        page
        className="thankYouLoader"
        active={true && props.isLoading}
      >
        <ThankYouMessage clientName={props.clientName.split(' ', 1)[0]} />
      </Dimmer>
    );
  }
  return (
    <Dimmer
      page
      inverted
      active={true && props.isLoading}
    >
      <Loader size="medium">
        {props.loadingMessage}
      </Loader>
    </Dimmer>
  );
}


FullScreenLoader.propTypes = {
  firstTime: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  clientName: PropTypes.string.isRequired,
  loadingMessage: PropTypes.string.isRequired,
};

export default FullScreenLoader;
