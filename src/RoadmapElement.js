import React from "react";

export default class RoadmapElement extends React.Component {
  handleToggleStatusClick = () => {
    this.props.toggleElementStatus(this.props.id);
	};
  
  render() {
    const isCheckmarkGreen = 
      this.props.isStatusComplete ? 'green' : ''
    return(
      <div className='ui segment'>
        {this.props.isCreateFormClose &&
          <div className="ui basic top right attached label">
            <a 
              onClick={this.props.onEditClick}
            >
              <i className="big write icon"></i>
            </a>
            <a 
              onClick={this.handleToggleStatusClick}
            >
              <i className={'big checkmark ' + isCheckmarkGreen + ' icon'}></i>
            </a>
          </div>
        }
        <div className="content">
          <div className="sub header">{this.props.cardType}</div>
          <h2 className="ui large header">  
            {this.props.title}
          </h2>
          <div className='description'>
            {this.props.description}
          </div>
          {this.props.callToActionCaption &&
            <a href={'https://' + this.props.callToActionURL} 
               target='_blank'>
              <div className='ui left bottom green button'>
                {this.props.callToActionCaption}
              </div>
            </a>
          }  
        </div>
      </div>
    );
  }
}