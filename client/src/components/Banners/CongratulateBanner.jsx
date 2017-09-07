import React, { PureComponent } from 'react';
import { Message, Grid, Container } from 'semantic-ui-react';
import { bannerStyle, mainMessageStyle, secondaryMessageStyle, undoStyle } from '../Constants/CongratulateBannerStyles';

class CongratulateBanner extends PureComponent {
  render() {
    return (
      <Message
        attached
        style={bannerStyle}
      >
        <Grid columns={3}>
          <Grid.Column />
          <Grid.Column textAlign="center">
            <span style={mainMessageStyle}>
              Nice work, {this.props.clientName.split(' ', 1)}!
            </span>
          </Grid.Column>
          <Grid.Column>
            <Container style={secondaryMessageStyle} textAlign="center" fluid>
              moved to bottom of roadmap
            </Container>
            <Container style={undoStyle} textAlign="right" fluid>
              <a href="#">
                undo
              </a>
            </Container>
          </Grid.Column>
        </Grid>
      </Message>
    );
  }
}

export default CongratulateBanner;
