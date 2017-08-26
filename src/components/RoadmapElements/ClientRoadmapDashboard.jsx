/* eslint-disable */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';

import { DragDropContext } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import withScrolling, { createHorizontalStrength, createVerticalStrength } from 'react-dnd-scrollzone';
import HTML5toTouch from '../../stores/helpers/HTML5toTouch';

import EditableRoadmapElementsList from './EditableRoadmapElementsList';
import ToggleableRoadmapElementForm from './ToggleableRoadmapElementForm';
import RoadmapHeader from '../RoadmapHeader/RoadmapHeader';

const ScrollZone = withScrolling('div');

const linearHorizontalStrength = createHorizontalStrength(250);
const linearVerticalStrength = createVerticalStrength(250);

// this easing function is from https://gist.github.com/gre/1650294 and
// expects/returns a number between [0, 1], however strength functions
// expects/returns a value between [-1, 1]
function ease(val) {
  const t = (val / 2) + 1; // [-1, 1] -> [0, 1]
  const easedT = t < 0.5 ? 2 * t * t : -1 + ((4 - (2 * t)) * t);
  return (easedT * 2) - 1; // [0, 1] -> [-1, 1]
}

function hStrength(box, point) {
  return ease(linearHorizontalStrength(box, point));
}

function vStrength(box, point) {
  return ease(linearVerticalStrength(box, point));
}

@DragDropContext(MultiBackend(HTML5toTouch))
@inject('roadmapElements')@observer
export default class ClientRoadmapDashboard extends React.Component {
  componentWillMount() {
    if (this.props.match.params.clientId) {
      this.props.roadmapElements.resetClientParams();
      this.props.roadmapElements.getClients();
      this.props.roadmapElements.setClientSlug(this.props.match.params.clientId);
      this.props.roadmapElements.toggleDissableClientNameInput();
      this.props.roadmapElements.fetchAll();
    }
  }
  componentWillUnmount() {
    this.props.roadmapElements.resetClientParams();
  }

  handleCreateFormSubmit = (roadmapElement) => {
    this.createRoadmapElement(roadmapElement);
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
      dnd_index: this.props.roadmapElements.all.length,
      due_date: roadmapElement.dueDate,
      card_type: roadmapElement.cardType,
      title: roadmapElement.title,
      description: roadmapElement.description,
      call_to_action: roadmapElement.callToActionCaption,
      call_to_action_url: roadmapElement.callToActionURL,
      status: roadmapElement.status,
      name: this.props.roadmapElements.currentClient,
    };
    this.props.roadmapElements.create(element);
  };

  updateRoadmapElement = (attrs) => {
    const element = {
      id: attrs.id,
      dnd_index: attrs.index,
      due_date: attrs.dueDate,
      card_type: attrs.cardType,
      title: attrs.title,
      description: attrs.description,
      call_to_action: attrs.callToActionCaption,
      call_to_action_url: attrs.callToActionURL,
      status: attrs.status,
      name: this.props.roadmapElements.currentClient,
    };

    this.props.roadmapElements.update(element);
  };

  toggleRoadmapElementStatus = (attrs) => {
    const element = {
      id: attrs.id,
      dnd_index: attrs.index,
      due_date: attrs.dueDate,
      card_type: attrs.cardType,
      title: attrs.title,
      description: attrs.description,
      call_to_action: attrs.callToActionCaption,
      call_to_action_url: attrs.callToActionURL,
      status: !attrs.status,
      name: this.props.roadmapElements.currentClient,
    };
    this.props.roadmapElements.update(element);
  };

  deleteRoadmapElement = (roadmapElementId) => {
    this.props.roadmapElements.delete(roadmapElementId);
  };

  handleElementMove = (dragIndex, hoverIndex) => {
    this.props.roadmapElements.moveRoadmapElement(dragIndex, hoverIndex);
  }
  handleCreateFormToggle = () => {
    this.props.roadmapElements.toggleCreateForm();
  }

  handleEditFormOpen = () => {
    this.props.roadmapElements.togglePlusButton();
  }

  render() {
    return (

      <Grid.Column>
        { this.props.roadmapElements.isLoading &&
          <Dimmer
            active
            page
            inverted
          >
            <Loader size="medium">
              Preparing Roadmap...
            </Loader>
          </Dimmer>
        }
        <ScrollZone
          verticalStrength={vStrength}
          horizontalStrength={hStrength}
        >
          <RoadmapHeader
            disabled={this.props.roadmapElements.isNameInputDisabled}
            placeholder="enter client's first and last name"
            name="clientName"
            value={this.props.roadmapElements.currentClient}
          />

          <EditableRoadmapElementsList
            roadmapElements={this.props.roadmapElements.all.slice()}
            isCreateFormClose={this.props.roadmapElements.isCreateFormClose}
            onFormOpen={this.handleEditFormOpen}
            onFormSubmit={this.handleEditFormSubmit}
            onDeleteClick={this.handleDeleteForm}
            toggleElementStatus={this.handleToggleRoadmapElementStatus}
            handleCreateFormToggle={this.handleCreateFormToggle}
            handleElementMove={this.handleElementMove}
          />
        </ScrollZone>
        { this.props.roadmapElements.isToggleableFormVisible &&
          <ToggleableRoadmapElementForm
            onFormSubmit={this.handleCreateFormSubmit}
            handleCreateFormToggle={this.handleCreateFormToggle}
          />
        }
      </Grid.Column>

    );
  }
}
