/* eslint-disable */
import React, { Component } from 'react';
import { Label, Icon, Grid, Segment, Modal, Button, Accordion } from 'semantic-ui-react';
import { segmentStyle, rowStyle, columnStyle, clientNameStyle, iconStyle, modalStyle, modalHeaderStyle, modalAcceptStyle } from '../../Constants/ClientElementStyles';
import Touch from '../../Lib/CheckTouch';
import StatisticsLabel from '../../ClientDashboard/RoadmapHeader/StatisticsLabel';

export default class ClientList extends Component {
  state = {
    isMouseInside: false,
    activeIndex: 0,
    open: false,
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  handleOnClientNameClick = (event, data) => {
    this.props.onClientNameClick(event, data);
  }

  handleArchiveClick = () => {
    this.show();
  }

  archiveClient = () => {
    this.close();
    this.props.onArchiveClick(this.props.clientSlug);
  }

  handleDuplicateClick = () => {
    this.props.onDuplicateClick(this.props.clientSlug);
  }

  mouseEnter = () => {
    this.setState({
      isMouseInside: true,
    });
  };

  mouseExit = () => {
    this.setState({
      isMouseInside: false,
    });
  };

  render() {
    const { activeIndex } = this.state

    let finalIconStyles = {};

    if (!this.state.isMouseInside && !Touch.isTouchDevice()) {
      finalIconStyles= Object.assign({}, iconStyle, {
        opacity: 0,
      });
    } else {
      finalIconStyles= Object.assign({}, iconStyle, {
        opacity: 1,
      });
    }

    return (
      <Segment
        style={segmentStyle}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
      >
        <Accordion>

        <Accordion.Title active={activeIndex === this.props.clientIndex} index={this.props.clientIndex} onClick={this.handleAccordionClick}>
          <Icon name='chevron up' />



          <Grid>
            <Grid.Row style={rowStyle}>
              <Grid.Column
                as={Label}
                style={clientNameStyle}
                content={this.props.clientName}
                onClick={this.handleOnClientNameClick}
                name={this.props.clientName}
                value={this.props.clientSlug}
              />
              <Grid.Column
                as={Label}
                floated="right"
                style={columnStyle}
              >
                <Icon
                  link
                  size="large"
                  name="trash outline"
                  style={finalIconStyles}
                  onClick={this.handleArchiveClick}
                />
                <Icon
                  link
                  size="large"
                  name="copy"
                  style={finalIconStyles}
                  onClick={this.handleDuplicateClick}
                />
                <Icon
                  link
                  size="large"
                  name="briefcase"
                  style={finalIconStyles}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          </Accordion.Title>

          <Accordion.Content active={activeIndex === this.props.clientIndex}>
            <StatisticsLabel />
          </Accordion.Content>

        </Accordion>

        <Modal
          size="mini"
          dimmer="blurring"
          style={modalStyle}
          open={this.state.open}
          onClose={this.close}
        >
          <Modal.Header style={modalHeaderStyle}>
            Archive Roadmap
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to archive {this.props.clientName}'s roadmap?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              No
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
              style={modalAcceptStyle}
              onClick={this.archiveClient}
            />
          </Modal.Actions>
        </Modal>


      </Segment>
    );
  }
}
