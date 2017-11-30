/* eslint-disable */
import React, { PureComponent } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { modalStyle, modalHeaderStyle, modalAcceptStyle } from '../../Constants/ClientElementStyles';

class ModalComponent extends PureComponent {
  render() {
    return (
      <Modal
        size="mini"
        dimmer="blurring"
        style={modalStyle}
        onClose={this.props.handleClose}
        open={this.props.isVisible}
      >
        <Modal.Header style={modalHeaderStyle}>
          {this.props.modalHeader}
        </Modal.Header>
        <Modal.Content>
          <p>{this.props.modalContent}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            content={this.props.negativeLabel}
            onClick={this.props.handleClose}
          />
          <Button
            positive
            content={this.props.positiveLabel}
            icon="checkmark"
            labelPosition="right"
            style={modalAcceptStyle}
            onClick={this.props.handlePositiveClick}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalComponent;
