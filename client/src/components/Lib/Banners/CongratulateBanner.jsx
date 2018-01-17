/* eslint-disable */
import React, { PureComponent } from 'react';
import { Message, Grid, Container, Transition } from 'semantic-ui-react';

export default class CongratulateBanner extends PureComponent {
  handleOnShow = () => {
    // setTimeout(this.props.hideCongratsBanner, 5500);
  }

  render() {
    return (
      <Transition
        animation="slide down"
        duration={{ hide: 2500, show: 300 }}
        visible={this.props.visible}
        onComplete={this.handleOnShow}
      >
        <Message
          attached
          className="congratulateMessage"
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
              className="bannerMessageColumn"
            >
              <span className="mainMessage">
                {this.props.mainMessage}
              </span>
            </Grid.Column>
            <Grid.Column
              computer={4}
              largeScreen={3}
              tablet={5}
              only={'large screen', 'tablet', 'computer'}
              textAlign="right"
            >
              {this.props.secondaryMessage &&
                <Container className="secondaryMessage">
                  {this.props.secondaryMessage}
                </Container>
              }
            </Grid.Column>
            <Grid.Column
              width={1}
              textAlign="left"
              className="bannerUndoColumn"
            >
              <Container className="undoLink">
                <a
                  tabIndex={0}
                  role="button"
                  className="undoLink"
                  onClick={this.props.handleButtonClick}
                >
                  {this.props.buttonCaption}
                </a>
              </Container>
            </Grid.Column>
          </Grid>
        </Message>
      </Transition>
    );
  }
}
