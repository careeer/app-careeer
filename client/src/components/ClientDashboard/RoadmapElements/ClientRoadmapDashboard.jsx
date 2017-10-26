/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Dimmer, Loader, Sidebar, Label } from 'semantic-ui-react';

import { DragDropContext } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import withScrolling, { createHorizontalStrength, createVerticalStrength } from 'react-dnd-scrollzone';

import AccountFlag from './AccountFlag';
import SettingsIcon from './SettingsIcon';
import HTML5toTouch from '../../Lib/HTML5toTouch';
import FullScreenLoader from './FullScreenLoader';
import RoadmapHeader from '../RoadmapHeader/RoadmapHeader';
import CongratulateBanner from '../Banners/CongratulateBanner';
import EditableRoadmapElementsList from './EditableRoadmapElementsList';
import CompletedRoadmapElementsList from './CompletedRoadmapElementsList';
import ToggleableRoadmapElementForm from './ToggleableRoadmapElementForm';

import '../Styles/RoadmapElements.scss';

const ScrollZone = withScrolling('div');
const linearHorizontalStrength = createHorizontalStrength(250);
const linearVerticalStrength = createVerticalStrength(250);

function ease(val) {
  const t = (val / 2) + 1;
  const easedT = t < 0.5 ? 2 * t * t : -1 + ((4 - (2 * t)) * t);
  return (easedT * 2) - 1;
}

function hStrength(box, point) {
  return ease(linearHorizontalStrength(box, point));
}

function vStrength(box, point) {
  return ease(linearVerticalStrength(box, point));
}

@DragDropContext(MultiBackend(HTML5toTouch))
@inject('roadmapElements') @observer
export default class ClientRoadmapDashboard extends Component {
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
            isDefaultLoading,
            isBannerVisible,
            isCreateFormClose,
            isToggleableFormVisible,
            isCompletedAccordionOpen,
            currentClient,
            freeTrialMessage,
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
          isDefaultLoading={isDefaultLoading}
          clientName={this.props.clientName || ""}
          loadingMessage="Fetching your Roadmap..."
        />
        <CongratulateBanner
          visible={isBannerVisible}
          clientName={currentClient}
          handleUndo={this.handleUndoComplete}
          hideCongratsBanner={this.handleBannerClose}
        />
        <AccountFlag
          accountMessage={freeTrialMessage}
        />
        <Grid className="roadmapMainGrid">
          <Grid.Column className="roadmapMainColumn">
            <ScrollZone
              verticalStrength={vStrength}
              horizontalStrength={hStrength}
            >
              <RoadmapHeader
                clientName={currentClient}
              />
              <EditableRoadmapElementsList
                roadmapElements={incompleteElements.slice()}
                enableDragAndDrop={true}
                isCreateFormClose={isCreateFormClose}
                onFormCopy={this.handleCopyForm}
                onFormOpen={this.handleEditFormOpen}
                onDeleteClick={this.handleDeleteForm}
                onFormSubmit={this.handleEditFormSubmit}
                handleElementMove={this.handleElementMove}
                handleCreateFormToggle={this.handleCreateFormToggle}
                toggleElementStatus={this.handleToggleRoadmapElementStatus}
              />
              <CompletedRoadmapElementsList
                completedElements={completedElements.slice()}
                enableDragAndDrop={false}
                isCreateFormClose={isCreateFormClose}
                completedAccordionIcon={completedAccordionIcon}
                toggleCompletedElements={toggleCompletedElements}
                isCompletedAccordionOpen={isCompletedAccordionOpen}
                completedAccordionMessage={completedAccordionMessage}
                onFormCopy={this.handleCopyForm}
                onFormOpen={this.handleEditFormOpen}
                onDeleteClick={this.handleDeleteForm}
                onFormSubmit={this.handleEditFormSubmit}
                handleElementMove={this.handleElementMove}
                handleCreateFormToggle={this.handleCreateFormToggle}
                toggleElementStatus={this.handleToggleRoadmapElementStatus}
              />
              <ToggleableRoadmapElementForm
                onFormSubmit={this.handleCreateFormSubmit}
                handleCreateFormToggle={this.handleCreateFormToggle}
                isToggleableFormVisible={isToggleableFormVisible}
              />
            </ScrollZone>
            <SettingsIcon />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
