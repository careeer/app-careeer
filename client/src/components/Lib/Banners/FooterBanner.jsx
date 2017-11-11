/* eslint-disable */
import React, { PureComponent } from 'react';
import { Message, Grid, Container, Transition } from 'semantic-ui-react';

export default class CongratulateBanner extends PureComponent {
  handleOnShow = () => {
    setTimeout(this.props.hideBanner, 5500);
  }

  render() {
    return (
      <Transition
        animation="slide up"
        duration={{ hide: 2500, show: 300 }}
        visible={this.props.visible}
        onComplete={this.handleOnShow}
      >
        <Message
          attached
          className="footerMessage"
        >
          <Grid>
            <span className="mainMessage">
              {this.props.footerMessage}
            </span>
          </Grid>
        </Message>
      </Transition>
    );
  }
}
