import React from 'react';
import { Button } from 'semantic-ui-react';

export default class RoadmapElementForm extends React.Component {
  state = {
    dueDate: this.props.dueDate || '',
    cardType: this.props.cardType || '',
    title: this.props.title || '',
    description: this.props.description || '',
    callToActionCaption: this.props.callToActionCaption || '',
    callToActionURL: this.props.callToActionURL || '',
    status: this.props.isStatusComplete || '',
  };
  handleDueDateChange = (e) => {
    this.setState({ dueDate: e.target.value });
  };

  handleCardTypeChange = (e) => {
    this.setState({ cardType: e.target.value });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleCallToActionCaptionChange = (e) => {
    this.setState({ callToActionCaption: e.target.value });
  };

  handleCallToActionURLChange = (e) => {
    this.setState({ callToActionURL: e.target.value });
  };

  handleSave = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      index: this.props.index,
      title: this.state.title,
      dueDate: this.state.dueDate,
      cardType: this.state.cardType,
      description: this.state.description,
      callToActionCaption: this.state.callToActionCaption,
      callToActionURL: this.state.callToActionURL.replace(/^https?\:\/\//i, '').replace(/^https?\:\/\//i, ''),
      status: this.state.status,
    });
  };

  handleTrashClick = () => {
    this.props.onDeleteClick(this.props.id);
  };

  render() {
    const isSaveDisabled = (
      (this.state.title.trim().length !== 0 || this.state.cardType.trim().length !== 0 || this.state.description.trim().length !== 0) &&
      ((this.state.callToActionCaption.trim().length !== 0 && this.state.callToActionURL.trim().length !== 0) ||
      (!this.state.callToActionCaption && !this.state.callToActionURL))
    ) ? false : true;
    const saveTabIndex = (
      (this.state.title.trim().length !== 0 || this.state.cardType.trim().length !== 0 || this.state.description.trim().length !== 0) && ((this.state.callToActionCaption.trim().length !== 0 && this.state.callToActionURL.trim().length !== 0) ||
      (!this.state.callToActionCaption && !this.state.callToActionURL))
    ) ? '' : -1;

    return (
      <div className="content">
        <div className="ui padded clearing attached segment">
          { this.props.id &&
            <a
              className="ui right corner basic label"
              onClick={this.handleTrashClick}
              role="button"
              tabIndex="-1"
            >
              <i className="trash icon" />
            </a>
          }
          <div className="ui form">
            <div className="field">
              <div className="ui large transparent input">
                <input
                  className="dueDate"
                  type="text"
                  value={this.state.dueDate}
                  placeholder="due date"
                  onChange={this.handleDueDateChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="ui large transparent input">
                <input
                  className="card_type"
                  type="text"
                  value={this.state.cardType}
                  placeholder="category"
                  onChange={this.handleCardTypeChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="ui huge transparent input">
                <input
                  className="title"
                  type="text"
                  value={this.state.title}
                  placeholder="action item"
                  onChange={this.handleTitleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="ui large transparent input">
                <input
                  className="description"
                  type="text"
                  value={this.state.description}
                  placeholder="description (160 character limit)"
                  maxLength="160"
                  onChange={this.handleDescriptionChange}
                />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <div className="ui big transparent input">
                  <input
                    className="caption"
                    type="text"
                    value={this.state.callToActionCaption}
                    placeholder="call to action"
                    onChange={this.handleCallToActionCaptionChange}
                  />
                </div>
                {this.state.callToActionCaption &&
                  <div className="ui left bottom green disabled button">
                    {this.state.callToActionCaption}
                  </div>
                }
              </div>
              <div className="field">
                <div className="ui labeled transparent input">
                  <input
                    className="url"
                    type="url"
                    value={this.state.callToActionURL}
                    placeholder="hyperlink (ex: http://careeer.me)"
                    onChange={this.handleCallToActionURLChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui two bottom attached buttons">
          <Button
            disabled={isSaveDisabled}
            tabIndex={saveTabIndex}
            onClick={this.handleSave}
          >
            Save
          </Button>
          <button
            className="ui button"
            onClick={this.props.onFormClose}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
