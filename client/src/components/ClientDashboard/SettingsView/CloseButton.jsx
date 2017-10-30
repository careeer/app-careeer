import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Label } from 'semantic-ui-react';

const CloseButton = props => (
  <Grid textAlign="right">
    <Grid.Column className="closeButton">
      <Label
        icon="close"
        onClick={props.onCloseClick}
      />
    </Grid.Column>
  </Grid>
);

CloseButton.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
};

export default CloseButton;
