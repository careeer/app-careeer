/* eslint-disable */
import React from 'react';
import EditableRoadmapElementsList from './EditableRoadmapElementsList';
import CompletedElementsBanner from '../Banners/CompletedElementsBanner';

export default class CompletedRoadmapElementsList extends React.Component {

  render() {
    return (
      <div>
        <CompletedElementsBanner
          message={this.props.completedAccordionMessage}
          icon={this.props.completedAccordionIcon}
          toggleCompletedElements={this.props.toggleCompletedElements}
        />
        { this.props.isCompletedAccordionOpen &&
        <EditableRoadmapElementsList
          roadmapElements={this.props.completedElements}
          isCreateFormClose={this.props.isCreateFormClose}
          onFormOpen={this.props.onFormOpen}
          onFormSubmit={this.props.onFormSubmit}
          onFormCopy={this.props.onFormCopy}
          onDeleteClick={this.props.onDeleteClick}
          toggleElementStatus={this.props.toggleElementStatus}
          handleCreateFormToggle={this.props.handleCreateFormToggle}
          handleElementMove={this.props.handleElementMove}
          enableDragAndDrop={this.props.enableDragAndDrop}
        />
        }
      </div>
    );
  }
}
