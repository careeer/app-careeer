import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer } from 'semantic-ui-react';
import ThankYouMessage from '../../OnBoarding/Components/ThankYouMessage';
import LoadingScreen from '../../Lib/LoadingScreen';

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
    <LoadingScreen isLoading={props.isLoading} />
  );
}


FullScreenLoader.propTypes = {
  isDefaultLoading: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  clientName: PropTypes.string.isRequired,
};
