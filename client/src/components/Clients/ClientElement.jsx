/* eslint-disable */
import React, { PureComponent } from 'react';
import { Label, Icon, Grid, Segment } from 'semantic-ui-react';
import { segmentStyle, rowStyle, columnStyle, clientNameStyle, iconStyle } from '../Constants/ClientElementStyles';

export default class ClientList extends PureComponent {
  handleOnClientNameClick = (event, data) => {
    this.props.onClientNameClick(event, data);
  }

  handleArchiveClick = () => {
    this.props.onArchiveClick();
  }

  handleDuplicateClick = () => {
    this.props.onDuplicateClick();
  }

  render() {
    return (
      <Segment
        style={segmentStyle}
      >
        <Grid>
          <Grid.Row style={rowStyle}>
            <Grid.Column
              as={Label}
              style={clientNameStyle}
              content={this.props.clientName}
              onClick={this.handleOnClientNameClick}
              name={this.props.clientName}
              value={this.props.clientSlug}
            />
            <Grid.Column
              as={Label}
              floated="right"
              style={columnStyle}
            >
              <Icon
                link
                size="large"
                name="trash outline"
                style={iconStyle}
                onClick={this.handleArchiveClick}
              />
              <Icon
                link
                size="large"
                name="copy"
                style={iconStyle}
                onClick={this.handleDuplicateClick}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
