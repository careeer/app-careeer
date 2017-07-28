import React from "react";

import RoadmapElementForm from './RoadmapElementForm'

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
      return(
        <RoadmapElementForm 
          onFormSubmit={this.handleFormSubmit}
					onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div className='ui content' >
          
            <button 
              className='massive ui fluid rounded button icon'
              onClick={this.handleFormOpen}
            >
              <i className='plus inverted large icon' />
            </button>
          
        </div>
      );
    }
  }
}