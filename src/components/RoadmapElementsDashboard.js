import React from "react";
import { observer } from 'mobx-react';

import EditableRoadmapElementsList from './EditableRoadmapElementsList'
import ToggleableRoadmapElementForm from './ToggleableRoadmapElementForm'

@observer(['roadmapElements'])
export default class RoadmapElementsDashboard extends React.Component {
  state = {
    roadmapElements: [
      {
        id: 'skdcx',
        cardType: 'professional branding',
        title: 'Update resume template',
        description: 'Learn to create effective and usable interfaces for a range of products and devices.',
        callToActionCaption: 'Learn more',
        callToActionURL: 'www.google.com',
        isStatusComplete: false,
      },
      {
        id: 'skdr',
        cardType: 'soft skills',
        title: 'Interview mockup',
        description: 'Meet for a half hour mock interview to perfect your skills dawg!',
        callToActionCaption: 'Don\'t click here',
        callToActionURL: 'www.bing.com',
        isStatusComplete: false,
      }
    ],

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
      cardType: roadmapElement.cardType || 'Card Type',
      title: roadmapElement.title || 'Title',
      description: roadmapElement.description,
      callToActionCaption: roadmapElement.callToActionCaption,
      callToActionURL: roadmapElement.callToActionURL,
    };
    this.setState({
      roadmapElements: this.state.roadmapElements.concat(element),
    });
  };

  updateRoadmapElement = (attrs) => {
    this.setState({
      roadmapElements: this.state.roadmapElements.map((roadmapElement) => {
        if (roadmapElement.id === attrs.id) {
          return Object.assign({}, roadmapElement, {
            cardType: attrs.cardType,
            title: attrs.title,
            description: attrs.description,
            callToActionCaption: attrs.callToActionCaption,
            callToActionURL: attrs.callToActionURL,
          });
        } else {
          return roadmapElement;
        }
      }),
    });
  };

  toggleRoadmapElementStatus = (elementId) => {
    this.setState({
      roadmapElements: this.state.roadmapElements.map((roadmapElement) => {
        if (roadmapElement.id === elementId) {
          return Object.assign({}, roadmapElement, {
            isStatusComplete: !roadmapElement.isStatusComplete
          });
        } else {
          return roadmapElement;
        }
      }),
    });
  };

  deleteRoadmapElement = (roadmapElementId) => {
    this.setState({
      roadmapElements: this.state.roadmapElements.filter(element => element.id !== roadmapElementId),
    });
  };

  render() {
    return (
      <div className='column'>
        <EditableRoadmapElementsList
          roadmapElements={this.state.roadmapElements}
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
