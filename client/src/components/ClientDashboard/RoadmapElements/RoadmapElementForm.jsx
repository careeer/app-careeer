/* eslint-disable */
import React from 'react';
import { Button, Form, Segment, Rail, Icon } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';

const COLOR = {
  '#6435c9': 'violet',
  '#e03997': 'pink',
  '#00b5ad': 'teal',
  '#fbbd08': 'yellow',
  transparent: null,
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
    const tempValue = e.target.value
    e.target.value = ''
    e.target.value = tempValue
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
    let cardTypeColorStyle = {
      color: '#919191',
    };
    if (this.props.color || this.state.color) {
      segmentColor = COLOR[this.state.color];
      if (this.state.color !== 'transparent') {
        cardTypeColorStyle = {
          color: this.state.color,
        };
      } else {
        cardTypeColorStyle = {
          color: '#919191',
        };
      }
    }

    const isPrimaryButton = (this.props.index === 0 && !this.props.isStatusComplete);

    return (
      <div className="content">
        <Segment
          padded
          clearing
          attached
          color={segmentColor}
          className="roadmapSegment"
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
            <Form.Group className="firstField">
              <Form.Field width={14}>
                <input
                  autoFocus
                  onFocus={this.moveCaretAtEnd}
                  type="text"
                  className="titleInput"
                  placeholder="action item"

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
            <Form.Group className="secondField">
              <Form.Field width={14}>
                <input
                  type="text"
                  maxLength="160"
                  className="descriptionInput"
                  placeholder="description (160 character limit)"

                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </Form.Field>
              <Form.Field width={3}>
                <input
                  type="text"
                  className="cardTypeInput"
                  placeholder="category"
                  style={cardTypeColorStyle}
                  value={this.state.cardType}
                  onChange={this.handleCardTypeChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group className="lastField">
              <Form.Field width={4}>
                <input
                  type="text"
                  className="captionInput"

                  value={this.state.callToActionCaption}
                  placeholder="call to action"
                  onChange={this.handleCallToActionCaptionChange}
                />
              </Form.Field>
              <Form.Field width={11}>
                <input
                  className="hyperlinkInput"
                  type="url"

                  value={this.state.callToActionURL}
                  placeholder="hyperlink (ex: http://careeer.me)"
                  onChange={this.handleCallToActionURLChange}
                />
              </Form.Field>
              <Form.Field width={3}>
                <input
                  type="text"
                  className="dueDateInput"
                  placeholder="due date"

                  value={this.state.dueDate}
                  onChange={this.handleDueDateChange}
                />
              </Form.Field>
            </Form.Group>
            { this.state.callToActionCaption &&
              <Button
                disabled
                color="green"
                floated="left"
                className="roadmapButton"
                basic={!isPrimaryButton}
                content={this.state.callToActionCaption}
              />
            }
          </Form>
          <Rail attached position="right">
            <Button
              disabled={isSaveDisabled}
              onClick={this.handleCopy}
              className="copyRoadmapElementButton"
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
