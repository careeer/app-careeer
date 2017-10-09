/* eslint-disable */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PlusButton from './PlusButton';
import RoadmapElementForm from './RoadmapElementForm';


export default class ToggleableRoadmapElementForm extends React.Component {
  state = {
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
    this.props.handleCreateFormToggle();
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
    this.props.handleCreateFormToggle();
  };

  handleFormSubmit = (element) => {
    this.props.onFormSubmit(element);
    this.setState({ isOpen: false });
    this.props.handleCreateFormToggle();
  };

  handleFormCopy = (element) => {
    this.props.onFormSubmit(element);
  };

  render() {
    if (this.props.isToggleableFormVisible) {
      if (this.state.isOpen) {
        return (
          <RoadmapElementForm
            onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleFormClose}
            onFormCopy={this.handleFormCopy}
          />
        );
      }
      return (
        <PlusButton
          iconSize="large"
          buttonSize="massive"
          handleFormOpen={this.handleFormOpen}
        />
      );
    }
    return null;
  }
}
