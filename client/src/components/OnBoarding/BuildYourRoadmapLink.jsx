import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Label, Icon } from 'semantic-ui-react';

const BuildYourRoadmapLink = props => (
  <Grid textAlign="right">
    <Grid.Column floated="right">
      <Label
        as="a"
        className="buildYourRoadmapLink"
        onClick={props.handleClick}
      >
        Build your roadmap &nbsp;
        <Icon name="chevron right" />
      </Label>
    </Grid.Column>
  </Grid>
);

BuildYourRoadmapLink.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default BuildYourRoadmapLink;
