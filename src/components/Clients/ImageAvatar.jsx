import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Image } from 'semantic-ui-react';

const avatarStyle = {
  marginRight: '15px',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '32px',
  lineWidth: '32px'
};

@inject('headerStore') @observer
class ImageAvatar extends Component {
  render() {
    let avatarUrl = this.props.avatar;
    if (this.props.headerStore.avatarUrl) {
      avatarUrl = this.props.headerStore.avatarUrl
    }
    return (
      <Image
        avatar
        alt=""
        style={avatarStyle}
        src={avatarUrl}
        onClick={() => { this.props.headerStore.dropzoneRef.open(); }}
      />
    );
  }
}

export default ImageAvatar;
