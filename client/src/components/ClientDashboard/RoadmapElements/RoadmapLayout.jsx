/* eslint-disable */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Grid, Dimmer, Loader, Sidebar, Label } from 'semantic-ui-react';

import { DragDropContext } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import withScrolling from 'react-dnd-scrollzone';

import AccountFlag from './AccountFlag';
import SettingsButton from './SettingsButton';
import ToolboxButton from './ToolboxButton';
import Settings from '../SettingsView/Settings';
import HTML5toTouch from '../../Lib/HTML5toTouch';
import FullScreenLoader from './FullScreenLoader';
import RoadmapHeader from '../RoadmapHeader/RoadmapHeader';
import CongratulateBanner from '../../Lib/Banners/CongratulateBanner';
import EditableRoadmapElementsList from './EditableRoadmapElementsList';
import CompletedRoadmapElementsList from './CompletedRoadmapElementsList';
import ToggleableRoadmapElementForm from './ToggleableRoadmapElementForm';

import '../Styles/RoadmapElements.scss';

const ScrollZone = withScrolling('div');

@DragDropContext(MultiBackend(HTML5toTouch))
@inject('roadmapElements') @observer
export default class RoadmapLayout extends Component {

  handleCreateFormSubmit = (roadmapElement) => {
    this.createRoadmapElement(roadmapElement);
  };

  handleCopyForm = (roadmapElement) => {
    this.copyRoadmapElement(roadmapElement);
  };

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

  handleShowSettings = () => {
    this.props.history.push(`${this.props.match.url}/settings`);
  }

  handleHideSettings = () => {
    this.props.history.push(`${this.props.match.url}`);
  }

  render() {
    const settingsPath = `${this.props.match.url}/settings`;
    const { isLoading,
            isBannerVisible,
            isDefaultLoading,
            isCreateFormClose,
            isToggleableFormVisible,
            isCompletedAccordionOpen,
            showSettings,
            currentClient,
            toggleSettings,
            freeTrialMessage,
            completedElements,
            incompleteElements,
            currentClientToolbox,
            completedAccordionIcon,
            toggleCompletedElements,
            completedAccordionMessage } = this.props.roadmapElements;

    return (
      <div>
        <FullScreenLoader
          isLoading={isLoading}
          isDefaultLoading={isDefaultLoading}
          clientName={this.props.clientName || ""}
          loadingMessage="Fetching your Roadmap..."
        />
        <SettingsButton
          toggleSettings={this.handleShowSettings}
        />
        <ToolboxButton
          toolboxUrl={currentClientToolbox}
        />
        <CongratulateBanner
          buttonCaption="undo"
          visible={isBannerVisible}
          handleButtonClick={this.handleUndoComplete}
          hideCongratsBanner={this.handleBannerClose}
          secondaryMessage="moved to bottom of roadmap"
          mainMessage={`nice work, ${currentClient.split(' ', 1)}!`}
        />
        <CongratulateBanner
          buttonCaption="change"
          visible={isBannerVisible}
          handleButtonClick={this.handleUndoComplete}
          hideCongratsBanner={this.handleBannerClose}
          mainMessage="Subscription started on Standard Track"
        />
        <AccountFlag
          accountMessage={freeTrialMessage}
        />
        <Dimmer.Dimmable blurring dimmed={isDefaultLoading}>
          <Grid className="roadmapMainGrid">
            <Grid.Column className="roadmapMainColumn">
              <ScrollZone>
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
            </Grid.Column>
          </Grid>
        </Dimmer.Dimmable>

        <Route
          exact path={settingsPath}
          {...this.props}
          render={() => (
            <Settings
              {...this.props}
              onCloseClick={this.handleHideSettings}
            />
          )}
        />
      </div>
    );
  }
}
