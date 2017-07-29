import React from "react";
import { observer } from 'mobx-react';

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

  handleToggleRoadmapElementStatus = (elementId) => {
    this.toggleRoadmapElementStatus(elementId);
  };

	handleDeleteForm = (roadmapElementId) => {
    this.deleteRoadmapElement(roadmapElementId);
	};

  createRoadmapElement = (roadmapElement) => {
    const element = {
      id: roadmapElement.title,
      cardType: roadmapElement.cardType,
      title: roadmapElement.title,
      description: roadmapElement.description,
      callToActionCaption: roadmapElement.callToActionCaption,
      callToActionURL: roadmapElement.callToActionURL,
    };

    this.props.roadmapElements.create(element);
  };

  updateRoadmapElement = (attrs) => {
    this.props.roadmapElements.update(attrs);
  };

  toggleRoadmapElementStatus = (elementId) => {
    this.props.roadmapElements.toggleStatus(elementId);
  };

  deleteRoadmapElement = (roadmapElementId) => {
    this.props.roadmapElements.delete(roadmapElementId);
  };

  render() {
    return (
      <div className='column'>
        <EditableRoadmapElementsList
          roadmapElements={this.props.roadmapElements.all.slice()}
          isCreateFormClose={this.state.isCreateFormClose}
          onFormOpen={this.handleEditFormOpen}
          onFormSubmit={this.handleEditFormSubmit}
				  onDeleteClick={this.handleDeleteForm}
          toggleElementStatus={this.handleToggleRoadmapElementStatus}
          handleCreateFormToggle={this.handleCreateFormToggle}
        />
        { this.state.isToggleableFormVisible &&
          <ToggleableRoadmapElementForm
            onFormSubmit={this.handleCreateFormSubmit}
            handleCreateFormToggle={this.handleCreateFormToggle}
          />
        }
      </div>
    );
  }
}
