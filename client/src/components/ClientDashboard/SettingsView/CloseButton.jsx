import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import DoneIcon from '../../Icons/DoneIcon';

const CloseButton = props => (
  <Grid textAlign="right">
    <Grid.Column className="closeButton">
      <a role="link" tabIndex={0} onClick={props.onCloseClick}>
        <DoneIcon />
      </a>
    </Grid.Column>
  </Grid>
);

CloseButton.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
};

export default CloseButton;
