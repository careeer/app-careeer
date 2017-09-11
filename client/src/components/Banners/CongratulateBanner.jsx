/* eslint-disable */
import React, { PureComponent } from 'react';
import { Message, Grid, Container, Transition } from 'semantic-ui-react';
import { bannerStyle, mainMessageStyle, secondaryMessageStyle, undoStyle } from '../Constants/CongratulateBannerStyles';

class CongratulateBanner extends PureComponent {
  handleOnShow = () => {
    // setTimeout(this.props.hideCongratsBanner, 3500);
  }

  render() {
    return (
      <Transition
        animation="slide down"
        duration={{ hide: 2000, show: 300 }}
        visible={this.props.visible}
        onComplete={this.handleOnShow}
      >
        <Message
          attached
          style={bannerStyle}
        >
          <Grid container>
            <Grid.Column
              computer={3}
              largeScreen={3}
              only={"large screen", "computer"}
            />
            <Grid.Column
              computer={8}
              largeScreen={9}
              tablet={10}
              mobile={13}
              textAlign="center"
            >
              <span style={mainMessageStyle}>
                Nice work, {this.props.clientName.split(' ', 1)}!
              </span>
            </Grid.Column>
            <Grid.Column
              computer={4}
              largeScreen={3}
              tablet={5}
              only={'large screen', 'tablet', 'computer'}
              textAlign="right"
            >
              <Container style={secondaryMessageStyle} >
                moved to bottom of roadmap
              </Container>
            </Grid.Column>
            <Grid.Column
              width={1}
              textAlign="left"
            >
              <Container style={undoStyle}>
                <a
                  tabIndex={0}
                  role="button"
                  style={undoStyle}
                  onClick={this.props.handleUndo}
                >
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
