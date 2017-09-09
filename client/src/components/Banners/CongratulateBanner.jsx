/* eslint-disable */
import React, { PureComponent } from 'react';
import { Message, Grid, Container, Transition, Sidebar } from 'semantic-ui-react';

import { bannerStyle, mainMessageStyle, secondaryMessageStyle, undoStyle, columnStyle } from '../Constants/CongratulateBannerStyles';

class CongratulateBanner extends PureComponent {
  render() {
    return (
      <Sidebar
        as={Message}
        animation='overlay'
        direction='top'
        visible={this.props.visible}
        style={bannerStyle}
      >
        <Grid container>
          <Grid.Column
            width={3}
            only="large screen"
            style={columnStyle}
          />
          <Grid.Column
            width={9}
            textAlign="center"
            style={columnStyle}
          >
            <span style={mainMessageStyle}>
              Nice work, {this.props.clientName.split(' ', 1)}!
            </span>
          </Grid.Column>
          <Grid.Column
            width={3}
            textAlign="right"
            style={columnStyle}
          >
            <Container style={secondaryMessageStyle} >
              moved to bottom of roadmap
            </Container>
          </Grid.Column>
          <Grid.Column
            width={1}
            textAlign="left"
            style={columnStyle}
          >
            <Container style={undoStyle}>
              <a
                onClick={this.props.handleUndo}
                style={undoStyle}
                role="button"
                tabIndex={0}
              >
                undo
              </a>
            </Container>
          </Grid.Column>
        </Grid>
      </Sidebar>

    );
  }
}

export default CongratulateBanner;
