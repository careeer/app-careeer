import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import ThankYouMessage from '../../OnBoarding/Components/ThankYouMessage';
import '../Styles/FullScreenLoader.css';

export default function FullScreenLoader(props) {
  if (props.isDefaultLoading) {
    return (
      <Dimmer
        page
        className="thankYouLoader"
        active={true && props.isDefaultLoading}
      >
        <ThankYouMessage clientName={props.clientName} />
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
  isDefaultLoading: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  clientName: PropTypes.string.isRequired,
  loadingMessage: PropTypes.string.isRequired,
};
