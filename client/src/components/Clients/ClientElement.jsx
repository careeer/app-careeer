/* eslint-disable */
import React, { Component } from 'react';
import { Label, Icon, Grid, Segment, Modal, Button } from 'semantic-ui-react';
import { segmentStyle, rowStyle, columnStyle, clientNameStyle, iconStyle, modalStyle, modalHeaderStyle } from '../Constants/ClientElementStyles';

export default class ClientList extends Component {
  state = { open: false }

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

  render() {
    return (
      <Segment
        style={segmentStyle}
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
                style={iconStyle}
                onClick={this.handleArchiveClick}
              />
              <Icon
                link
                size="large"
                name="copy"
                style={iconStyle}
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
              onClick={this.archiveClient}
            />
          </Modal.Actions>
        </Modal>
      </Segment>
    );
  }
}
