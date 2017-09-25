/* eslint-disable */
import React, { Component } from 'react';
import { Label, Icon, Grid, Segment, Modal, Button } from 'semantic-ui-react';
import { segmentStyle, rowStyle, columnStyle, clientNameStyle, iconStyle, modalStyle, modalHeaderStyle, modalAcceptStyle } from '../../Constants/ClientElementStyles';
import Touch from '../../Lib/CheckTouch';

export default class ClientList extends Component {
  state = {
    isMouseInside: false,
    open: false,
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

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
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
