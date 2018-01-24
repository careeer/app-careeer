/* eslint-disable */
import React, { Component } from 'react';
import { Transition, Dimmer } from 'semantic-ui-react';
import RoadmapLayout from '../ClientDashboard/RoadmapElements/RoadmapLayout';

export default class SubscriptionComplete extends Component {
  state = {
    open: true,
  }

  componentWillMount() {
    history.replaceState(null, document.title, `/${this.props.roadmapElements.currentClientSlug}`);
  }
  
  componentDidMount() {
    this.handleOnShow();
  }

  handleOnShow = () => {
    setTimeout(this.handleClose, 2500);
  }

  handleClose = () => {
    this.setState({ open: false });
    setTimeout(this.handleBanner, 2600);
  }

  handleBanner = () => {
    this.props.roadmapElements.showCustomBanner();
  }

  render() {
    return (
      <div>
        <Transition
          unmountOnHide
          animation="slide down"
          visible={this.state.open}
          onShow={this.handleOnShow}
          duration={{ hide: 1500, show: 4000 }}
        >
          <Dimmer
            page
            active
            className="paymentComplete"
          >
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="160"
                viewBox="-263.5 236.5 26 26"
              >
                <g className="svg-success">
                  <circle cx="-250.5" cy="249.5" r="12" />
                  <path d="M-256.46 249.65l3.9 3.74 8.02-7.8" />
                </g>
              </svg>
            </div>
          </Dimmer>
        </Transition>
        <RoadmapLayout {...this.props} />
      </div>
    );
  }
}
