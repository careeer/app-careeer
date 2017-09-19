/* eslint-disable */
import React from 'react';
import { Button, Form, Input, Segment, Rail, Icon } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';
import { dueDateStyle, cardTypeStyle, titleStyle, descriptionStyle, hyperlinkStyle, captionStyle, firstFieldStyle, lastFieldStyle, secondFieldStyle } from '../Constants/RoadmapElementFormStyles';
import { segmentStyle, COLOR } from '../Constants/CommonElementStyles';

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
    const element = this.createRoadmapObject();
    element.index = this.props.index;
    this.props.onFormSubmit(element);
  };

  handleCopy = () => {
    const element = this.createRoadmapObject();
    element.index = this.props.index + 1;
    this.props.onFormCopy(element);
  };

  handleTrashClick = () => {
    this.props.onDeleteClick(this.props.id);
  };

  createRoadmapObject = () => {
    const element = {
      id: this.props.id,
      title: this.state.title,
      dueDate: this.state.dueDate,
      cardType: this.state.cardType,
      description: this.state.description,
      callToActionCaption: this.state.callToActionCaption,
      callToActionURL: this.state.callToActionURL.replace(/^https?\:\/\//i, '').replace(/^https?\:\/\//i, ''),
      status: this.state.status,
      color: this.state.color,
    }
    return element;
  };

  componentDidUpdate = () => {
    document.getElementsByClassName("content")[0].scrollIntoView();
  };

  moveCaretAtEnd(e) {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

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

    let segmentColor = null;
    let cardTypeColorStyle;
    if (this.props.color || this.state.color) {
      segmentColor = COLOR[this.state.color];
      if (this.state.color !== 'transparent'){
        cardTypeColorStyle = Object.assign({}, cardTypeStyle, {
          color: this.state.color,
        });
      } else {
        cardTypeColorStyle = Object.assign({}, cardTypeStyle, {
          color: '#919191',
        });
      }
    }

    const isPrimaryButton = (this.props.index === 0 && !this.props.isStatusComplete);

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
            <Form.Group style={firstFieldStyle}>
              <Form.Field width={14}>
                <input
                  autoFocus
                  onFocus={this.moveCaretAtEnd}
                  type="text"
                  className="title"
                  placeholder="action item"
                  style={titleStyle}
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </Form.Field>
              <Form.Field
                width={6}
                control={CirclePicker}
                color={this.state.color}
                onChange={this.handleColorChange}
                colors={['transparent', '#6435c9', '#e03997', '#00b5ad', '#fbbd08']}
              />
            </Form.Group>
            <Form.Group style={secondFieldStyle}>
              <Form.Field width={14}>
                <input
                  type="text"
                  maxLength="160"
                  className="description"
                  placeholder="description (160 character limit)"
                  style={descriptionStyle}
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </Form.Field>
              <Form.Field width={3}>
                <input
                  type="text"
                  className="card_type"
                  placeholder="category"
                  style={cardTypeColorStyle}
                  value={this.state.cardType}
                  onChange={this.handleCardTypeChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group style={lastFieldStyle}>
              <Form.Field width={4}>
                <input
                  className="caption"
                  type="text"
                  style={captionStyle}
                  value={this.state.callToActionCaption}
                  placeholder="call to action"
                  onChange={this.handleCallToActionCaptionChange}
                />
              </Form.Field>
              <Form.Field width={11}>
                <input
                  className="url"
                  type="url"
                  style={hyperlinkStyle}
                  value={this.state.callToActionURL}
                  placeholder="hyperlink (ex: http://careeer.me)"
                  onChange={this.handleCallToActionURLChange}
                />
              </Form.Field>
              <Form.Field width={3}>
                <input
                  type="text"
                  className="dueDate"
                  placeholder="due date"
                  style={dueDateStyle}
                  value={this.state.dueDate}
                  onChange={this.handleDueDateChange}
                />
              </Form.Field>
            </Form.Group>
            { this.state.callToActionCaption &&
              <Button
                disabled
                floated="left"
                color="green"
                basic={!isPrimaryButton}
                content={this.state.callToActionCaption}
              />
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
            content="Save"
          />
          <Button
            className="ui button"
            onClick={this.props.onFormClose}
            content="Cancel"
          />
        </div>
      </div>
    );
  }
}
