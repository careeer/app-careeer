/* eslint-disable */
import React, { PureComponent } from 'react';
import { Message, Grid, Container, Transition } from 'semantic-ui-react';

export default class CongratulateBanner extends PureComponent {
  handleOnShow = () => {
    setTimeout(this.props.hideCongratsBanner, 5500);
  }

  render() {
    return (
      <Transition
        unmountOnHide
        animation="slide down"
        onShow={this.handleOnShow}
        visible={this.props.visible}
        duration={{ hide: 2500, show: 300 }}
      >
        <Message
          attached
          className="congratulateMessage"
        >
          <Grid container>
            <Grid.Column
              computer={3}
              largeScreen={3}
              only={'large screen', 'computer'}
            />
            <Grid.Column
              tablet={10}
              mobile={13}
              computer={8}
              largeScreen={9}
              textAlign="center"
              className="bannerMessageColumn"
            >
              <span className="mainMessage">
                {this.props.mainMessage}
              </span>
            </Grid.Column>
            <Grid.Column
              tablet={5}
              computer={4}
              largeScreen={3}
              textAlign="right"
              only={'large screen', 'tablet', 'computer'}
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
              {this.props.buttonCaption &&
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
              }
            </Grid.Column>
          </Grid>
        </Message>
      </Transition>
    );
  }
}
