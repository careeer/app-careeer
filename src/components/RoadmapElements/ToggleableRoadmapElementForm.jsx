import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
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

  render() {
    if (this.state.isOpen) {
      return (
        <RoadmapElementForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    }
    return (
      <Button
        fluid
        size="massive"
        onClick={this.handleFormOpen}
      >
        <Icon
          inverted
          size="large"
          name="plus"
        />
      </Button>
    );
  }
}
