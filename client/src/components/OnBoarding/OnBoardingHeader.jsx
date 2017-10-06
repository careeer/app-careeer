import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Label, Icon } from 'semantic-ui-react';

const OnBoardingHeader = props => (
  <Grid>
    <Grid.Column
      width={8}
      floated="left"
      textAlign="left"
      className="onBoardingHeader"
    >
      <p className="pageCounter">
        {props.counterLabel}
      </p>
    </Grid.Column>
    <Grid.Column
      width={8}
      floated="right"
      textAlign="right"
      className="onBoardingHeader"
    >
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

OnBoardingHeader.propTypes = {
  counterLabel: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default OnBoardingHeader;
