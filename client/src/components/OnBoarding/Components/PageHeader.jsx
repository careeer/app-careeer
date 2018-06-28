import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Label, Icon } from 'semantic-ui-react';

const PageHeader = props => (
  <div className="pageHeader">
    <Grid.Column
      floated="left"
      textAlign="left"
      className="onBoardingHeader"
    >
      <p className="pageCounter">
        {props.counterLabel}
      </p>
    </Grid.Column>
    <Grid.Column
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
        {props.icon &&
          <Icon name="chevron right" />
        }
      </Label>
    </Grid.Column>
  </div>
);

PageHeader.propTypes = {
  icon: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  counterLabel: PropTypes.string.isRequired,
  headerLinkLabel: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  icon: true,
};

export default PageHeader;
