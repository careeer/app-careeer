import React from 'react';
import { Button, Form, Input, Segment, Rail, Icon } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';

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
    this.props.onFormCopy(this.createRoadmapObject());
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
              className="ui right corner basic label"
              onClick={this.handleTrashClick}
              role="button"
              tabIndex="-1"
            >
              <i className="trash icon" />
            </a>
          }
          <Form>
            <Form.Group unstackable widths="equal">
              <Form.Field
                control={Input}
                transparent
                className="card_type"
                type="text"
                value={this.state.cardType}
                placeholder="category"
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
              control={Input}
              size="huge"
              transparent
              className="title"
              type="text"
              value={this.state.title}
              placeholder="action item"
              onChange={this.handleTitleChange}
            />
            <Form.Field
              control={Input}
              transparent
              size="large"
              className="description"
              type="text"
              value={this.state.description}
              placeholder="description (160 character limit)"
              maxLength="160"
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
                value={this.state.callToActionURL}
                placeholder="hyperlink (ex: http://careeer.me)"
                onChange={this.handleCallToActionURLChange}
              />
              <Form.Field
                control={Input}
                transparent
                width={3}
                size="large"
                className="dueDate"
                type="text"
                value={this.state.dueDate}
                placeholder="due date"
                onChange={this.handleDueDateChange}
              />
            </Form.Group>
            {this.state.callToActionCaption &&
              <div className="ui left bottom green disabled button">
                {this.state.callToActionCaption}
              </div>
            }
          </Form>
          <Rail attached position="right">
            <Button
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
