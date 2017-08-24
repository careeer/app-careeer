import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Dropzone from 'react-dropzone';

const dropStyle = {
  marginRight: '15px',
  width: '31px',
  height: '31px',
  borderWidth: '1px',
  borderColor: '#919191',
  borderStyle: 'dashed',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '32px',
};

@inject('headerStore') @observer
class ImageUpload extends Component {
  render() {
    return (
      <Dropzone
        ref={(node) => { this.props.headerStore.dropzoneRef = node; }}
        style={dropStyle}
        multiple={false}
        accept="image/*"
        onDrop={this.props.headerStore.uploadFile}
      />
    );
  }
}

export default ImageUpload;
