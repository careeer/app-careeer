/* eslint-disable */
import React from 'react';
import { Button, Form, Input, Segment, Rail, Icon } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';
import { dueDateStyle, cardTypeStyle, titleStyle, descriptionStyle, hyperlinkStyle, captionStyle } from '../Constants/RoadmapElementFormStyles.js'

const segmentStyle = {
  marginTop: '0',
  marginBottom: '0',
};

export default class RoadmapElementForm extends React.Component {
  state = {
    dueDate: this.props.dueDate || '',
    cardType: this.props.cardType || '',
    title: this.props.title || '',
    description: this.props.description || '',
    callToActionCaption: this.props.callToActionCaption || '',
    callToActionURL: this.props.callToActionURL || '',
    status: this.props.isStatusComplete || '',
    color: this.props.color || '',
  };

  handleColorChange = (e) => {
    this.setState({ color: e.hex });
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
    this.props.onFormSubmit(this.createRoadmapObject());
  };

  handleCopy = () => {
    this.props.onFormCopy({
      id: this.props.id,
      index: this.props.index,
      title: this.state.title,
      dueDate: this.state.dueDate,
      cardType: this.state.cardType,
      description: this.state.description,
      callToActionCaption: this.state.callToActionCaption,
      callToActionURL: this.state.callToActionURL.replace(/^https?\/\//i, '').replace(/^https?\/\//i, ''),
      status: this.state.status,
      color: this.state.color,
    });
  };

  handleTrashClick = () => {
    this.props.onDeleteClick(this.props.id);
  };

  createRoadmapObject = () => {
    const element = {
      id: this.props.id,
      index: this.props.index,
      title: this.state.title,
      dueDate: this.state.dueDate,
      cardType: this.state.cardType,
      description: this.state.description,
      callToActionCaption: this.state.callToActionCaption,
      callToActionURL: this.state.callToActionURL.replace(/^https?\/\//i, '').replace(/^https?\/\//i, ''),
      status: this.state.status,
      color: this.state.color,
    }
    return element;
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

    const COLOR = {
      '#6435c9': 'violet',
      '#e03997': 'pink',
      '#00b5ad': 'teal',
      '#fbbd08': 'yellow',
      transparent: null,
    };
    let segmentColor = null;
    if (this.props.color || this.state.color) {
      segmentColor = COLOR[this.state.color];
    }

    const primaryButton = (this.props.index === 0) ? '' : 'basic';

    return (
      <div className="content">
        <Segment
          padded
          clearing
          attached
          style={segmentStyle}
          color={segmentColor}
        >
          { this.props.id &&
            <a
              role="button"
              tabIndex="-1"
              className="ui right corner basic label"
              onClick={this.handleTrashClick}
            >
              <i className="trash icon" />
            </a>
          }
          <Form>
            <Form.Group unstackable widths="equal">
              <Form.Field
                transparent
                type="text"
                className="card_type"
                placeholder="category"
                control={Input}
                style={cardTypeStyle}
                value={this.state.cardType}
                onChange={this.handleCardTypeChange}
              />
              <Form.Field
                control={CirclePicker}
                color={this.state.color}
                onChange={this.handleColorChange}
                colors={['transparent', '#6435c9', '#e03997', '#00b5ad', '#fbbd08']}
              />
            </Form.Group>
            <Form.Field
              transparent
              type="text"
              size="huge"
              className="title"
              placeholder="action item"
              control={Input}
              style={titleStyle}
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <Form.Field
              transparent
              type="text"
              size="large"
              maxLength="160"
              className="description"
              placeholder="description (160 character limit)"
              control={Input}
              style={descriptionStyle}
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
            <Form.Group>
              <Form.Field>
                <Input
                  width={4}
                  transparent
                  size="big"
                  className="caption"
                  type="text"
                  style={captionStyle}
                  value={this.state.callToActionCaption}
                  placeholder="call to action"
                  onChange={this.handleCallToActionCaptionChange}
                />
              </Form.Field>
              <Form.Field
                control={Input}
                width={9}
                transparent
                className="url"
                type="url"
                style={hyperlinkStyle}
                value={this.state.callToActionURL}
                placeholder="hyperlink (ex: http://careeer.me)"
                onChange={this.handleCallToActionURLChange}
              />
              <Form.Field
                transparent
                width={3}
                type="text"
                size="large"
                className="dueDate"
                placeholder="due date"
                control={Input}
                style={dueDateStyle}
                value={this.state.dueDate}
                onChange={this.handleDueDateChange}
              />
            </Form.Group>
            {this.state.callToActionCaption &&
              <div
                className={`ui left bottom green ${primaryButton} disabled button`}
              >
                {this.state.callToActionCaption}
              </div>
            }
          </Form>
          <Rail attached position="right">
            <Button
              disabled={isSaveDisabled}
              style={{ height: '100%', paddingRight: '0', paddingLeft: '11px' }}
              onClick={this.handleCopy}
            >
              <Icon name="copy" />
            </Button>
          </Rail>
        </Segment>
        <div className="ui two bottom attached buttons">
          <Button
            disabled={isSaveDisabled}
            tabIndex={saveTabIndex}
            onClick={this.handleSave}
          >
            Save
          </Button>
          <Button
            className="ui button"
            onClick={this.props.onFormClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}
