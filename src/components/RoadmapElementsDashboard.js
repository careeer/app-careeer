import React from "react";
import { observer } from 'mobx-react';
import { Grid, Input } from 'semantic-ui-react'

import EditableRoadmapElementsList from './EditableRoadmapElementsList'
import ToggleableRoadmapElementForm from './ToggleableRoadmapElementForm'

@observer(['roadmapElements'])
export default class RoadmapElementsDashboard extends React.Component {
  componentWillMount() {
    this.props.roadmapElements.fetchAll();
  }

  state = {
    isCreateFormClose: true,
    isToggleableFormVisible: true,
    roadmapName: '',
    isNameDisabled: false,
    savedName: false,
    clientName: ''
  };

  handleCreateFormToggle = () => {
    this.setState({
      isCreateFormClose: !this.state.isCreateFormClose
    });
  };

  handleCreateFormSubmit = (roadmapElement) => {
    this.createRoadmapElement(roadmapElement);
  }

  handleEditFormOpen = () => {
    this.setState({
      isToggleableFormVisible: !this.state.isToggleableFormVisible
    });
  }

  handleEditFormSubmit = (attrs) => {
    this.updateRoadmapElement(attrs);
	};

  handleToggleRoadmapElementStatus = (element) => {
    this.toggleRoadmapElementStatus(element);
  };

	handleDeleteForm = (roadmapElementId) => {
    this.deleteRoadmapElement(roadmapElementId);
	};

  createRoadmapElement = (roadmapElement) => {
    const element = {
      card_type: roadmapElement.cardType,
      title: roadmapElement.title,
      description: roadmapElement.description,
      call_to_action: roadmapElement.callToActionCaption,
      call_to_action_url: roadmapElement.callToActionURL,
      status: roadmapElement.status,
      name: this.state.roadmapName,
    };

    this.props.roadmapElements.create(element);
  };

  updateRoadmapElement = (attrs) => {
    const element = {
      id: attrs.id,
      card_type: attrs.cardType,
      title: attrs.title,
      description: attrs.description,
      call_to_action: attrs.callToActionCaption,
      call_to_action_url: attrs.callToActionURL,
      status: attrs.status,
      name: this.state.roadmapName,
    };
    this.props.roadmapElements.update(element);
  };

  toggleRoadmapElementStatus = (attrs) => {
    const element = {
      id: attrs.id,
      card_type: attrs.cardType,
      title: attrs.title,
      description: attrs.description,
      call_to_action: attrs.callToActionCaption,
      call_to_action_url: attrs.callToActionURL,
      status: !attrs.status,
      name: this.state.roadmapName,
    };
    this.props.roadmapElements.update(element);
  };

  deleteRoadmapElement = (roadmapElementId) => {
    this.props.roadmapElements.delete(roadmapElementId);
  };

  handleRef = c => {
    this.inputRef = c
  }

  handleKeyPress = (event) => {
    if(event.key == 'Enter' && this.state.clientName){
      this.setState({
        isNameDisabled: true,
        savedName: true,
      });
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { clientName } = this.state
    if (this.state.savedName) {
      return (
        <Grid.Column>
          <Input transparent={true} fluid={true} disabled={this.state.isNameDisabled} placeholder="enter client's first and last name" onKeyPress={this.handleKeyPress} name='clientName' value={clientName} onChange={this.handleChange} />

          <EditableRoadmapElementsList
            roadmapElements={this.props.roadmapElements.all.slice()}
            isCreateFormClose={this.state.isCreateFormClose}
            onFormOpen={this.handleEditFormOpen}
            onFormSubmit={this.handleEditFormSubmit}
            onDeleteClick={this.handleDeleteForm}
            toggleElementStatus={this.handleToggleRoadmapElementStatus}
            handleCreateFormToggle={this.handleCreateFormToggle}
          />
            <ToggleableRoadmapElementForm
              onFormSubmit={this.handleCreateFormSubmit}
              handleCreateFormToggle={this.handleCreateFormToggle}
            />
        </Grid.Column>
      );
    } else {
      return (
        <Grid.Column>
          <Input
            transparent={true}
            fluid={true}
            disabled={this.state.isNameDisabled}
            placeholder="enter client's first and last name" onKeyPress={this.handleKeyPress}
            name='clientName'
            value={clientName}
            onChange={this.handleChange}
          />
        </Grid.Column>
      );
    }
  }
}
