/* eslint-disable */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Dimmer, Loader, Sidebar, Label } from 'semantic-ui-react';

import { DragDropContext } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import withScrolling, { createHorizontalStrength, createVerticalStrength } from 'react-dnd-scrollzone';

import HTML5toTouch from '../../Lib/HTML5toTouch';

import EditableRoadmapElementsList from './EditableRoadmapElementsList';
import ToggleableRoadmapElementForm from './ToggleableRoadmapElementForm';
import CompletedRoadmapElementsList from './CompletedRoadmapElementsList';
import RoadmapHeader from '../RoadmapHeader/RoadmapHeader';
import CongratulateBanner from '../../Banners/CongratulateBanner';
import AccountFlag from './AccountFlag';
import FullScreenLoader from './FullScreenLoader';

import { mainGridStyle, mainColumnStyle } from '../../Constants/CommonElementStyles';


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
@inject('roadmapElements') @observer
export default class ClientRoadmapDashboard extends React.Component {
  componentWillMount() {
    const client = this.props.match.params.clientId;
    if (client) {
      this.props.roadmapElements.resetClientParams();
      this.props.roadmapElements.getClients();
      this.props.roadmapElements.setClientSlug(client);
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
  handleCopyForm = (roadmapElement) => {
    this.copyRoadmapElement(roadmapElement);
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
    this.props.roadmapElements.create(roadmapElement);
  };

  copyRoadmapElement = (roadmapElement) => {
    this.props.roadmapElements.copy(roadmapElement);
  };

  updateRoadmapElement = (roadmapElement) => {
    this.props.roadmapElements.update(roadmapElement);
  };

  toggleRoadmapElementStatus = (roadmapElement) => {
    this.props.roadmapElements.toggleStatus(roadmapElement.id);
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

  handleBannerClose = () => {
    this.props.roadmapElements.hideBanner();
  }

  handleUndoComplete = () => {
    this.props.roadmapElements.undoComplete();
  }

  render() {
    const { isLoading,
            isBannerVisible,
            isCreateFormClose,
            isToggleableFormVisible,
            isCompletedAccordionOpen,
            currentClient,
            completedElements,
            incompleteElements,
            completedAccordionIcon,
            toggleCompletedElements,
            completedAccordionMessage
          } = this.props.roadmapElements;

    return (
      <div>
        <FullScreenLoader
          isLoading={isLoading}
          loadingMessage="Fetching your Roadmap..."
        />
        <CongratulateBanner
          clientName={currentClient}
          visible={isBannerVisible}
          hideCongratsBanner={this.handleBannerClose}
          handleUndo={this.handleUndoComplete}
        />
        <AccountFlag
          accountMessage="Create account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+2"
        />
        <Grid style={mainGridStyle}>
          <Grid.Column style={mainColumnStyle}>
            <ScrollZone
              verticalStrength={vStrength}
              horizontalStrength={hStrength}
            >
              <RoadmapHeader
                clientName={currentClient}
              />

              <EditableRoadmapElementsList
                roadmapElements={incompleteElements.slice()}
                isCreateFormClose={isCreateFormClose}
                onFormOpen={this.handleEditFormOpen}
                onFormSubmit={this.handleEditFormSubmit}
                onFormCopy={this.handleCopyForm}
                onDeleteClick={this.handleDeleteForm}
                toggleElementStatus={this.handleToggleRoadmapElementStatus}
                handleCreateFormToggle={this.handleCreateFormToggle}
                handleElementMove={this.handleElementMove}
                enableDragAndDrop={true}
              />

              { (completedElements.length > 0) &&
                <CompletedRoadmapElementsList
                  completedAccordionMessage={completedAccordionMessage}
                  completedAccordionIcon={completedAccordionIcon}
                  toggleCompletedElements={toggleCompletedElements}
                  enableDragAndDrop={false}
                  isCompletedAccordionOpen={isCompletedAccordionOpen}
                  completedElements={completedElements.slice()}
                  isCreateFormClose={isCreateFormClose}
                  onFormOpen={this.handleEditFormOpen}
                  onFormSubmit={this.handleEditFormSubmit}
                  onFormCopy={this.handleCopyForm}
                  onDeleteClick={this.handleDeleteForm}
                  toggleElementStatus={this.handleToggleRoadmapElementStatus}
                  handleCreateFormToggle={this.handleCreateFormToggle}
                  handleElementMove={this.handleElementMove}
                />
              }

              { isToggleableFormVisible &&
                <ToggleableRoadmapElementForm
                  onFormSubmit={this.handleCreateFormSubmit}
                  handleCreateFormToggle={this.handleCreateFormToggle}
                />
              }
            </ScrollZone>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
