/* eslint-disable */
import React from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';
import { bannerStyle, mainMessageStyle, rowStyle, floatedColumnStyle, iconStyle } from '../Constants/CompletedBannerStyles';

export default class CompletedElementsBanner extends React.Component {
  handleClick = () => {
    this.props.toggleCompletedElements();
  }

  render() {
    return (
      <Button
        fluid
        compact
        size="tiny"
        style={bannerStyle}
        onClick={this.handleClick}
      >
        <Grid>
          <Grid.Row style={rowStyle}>
            <Grid.Column
              width={15}
              mobile={14}
              textAlign="center"
              verticalAlign="middle"
            >
              <span style={mainMessageStyle}>
                {this.props.message}
              </span>
            </Grid.Column>
            <Grid.Column
              floated="right"
              style={floatedColumnStyle}
            >
              <Icon
                size="huge"
                style={iconStyle}
                name={this.props.icon}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Button>
    );
  }
}
