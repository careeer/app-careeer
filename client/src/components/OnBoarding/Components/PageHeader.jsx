import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Label, Icon } from 'semantic-ui-react';

const PageHeader = props => (
  <Grid className="pageHeader">
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
        className="headerLink"
        onClick={props.handleClick}
      >
        {props.headerLinkLabel}&nbsp;
        <Icon name="chevron right" />
      </Label>
    </Grid.Column>
  </Grid>
);

PageHeader.propTypes = {
  handleClick: PropTypes.func.isRequired,
  counterLabel: PropTypes.string.isRequired,
  headerLinkLabel: PropTypes.string.isRequired,
};

export default PageHeader;
