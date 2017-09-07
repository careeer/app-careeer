import React, { PureComponent } from 'react';
import { Message, Grid, Container, Transition } from 'semantic-ui-react';
import { bannerStyle, mainMessageStyle, secondaryMessageStyle, undoStyle } from '../Constants/CongratulateBannerStyles';

class CongratulateBanner extends PureComponent {
  render() {
    return (
      <Transition
        animation="slide down"
        duration={{ hide: 1200, show: 200 }}
        visible={this.props.visible}
      >
        <Message
          attached
          style={bannerStyle}
        >
          <Grid container>
            <Grid.Column width={3} only="large screen" />
            <Grid.Column
              width={9}
              textAlign="center"
            >
              <span style={mainMessageStyle}>
                Nice work, {this.props.clientName.split(' ', 1)}!
              </span>
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              <Container style={secondaryMessageStyle} >
                moved to bottom of roadmap
              </Container>
            </Grid.Column>
            <Grid.Column width={1} textAlign="left">
              <Container style={undoStyle}>
                <a href="#">
                  undo
                </a>
              </Container>
            </Grid.Column>
          </Grid>
        </Message>
      </Transition>
    );
  }
}

export default CongratulateBanner;
