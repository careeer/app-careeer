/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Image, Button, Icon } from 'semantic-ui-react';

const avatarStyle = {
  marginRight: '15px',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '32px',
  lineWidth: '32px',
};
const buttonStyle = {
  width: '60px',
  height: '60px',
  paddingLeft: '13px',
  paddingRight: '0',
  paddingBottom: '0',
  paddingTop: '5px',
  lineHeight: '32px',
  lineWidth: '32px',
};

@inject('headerStore') @observer
class ImageAvatar extends Component {
  render() {
    let avatarUrl = this.props.avatar;
    if (this.props.headerStore.avatarUrl) {
      avatarUrl = this.props.headerStore.avatarUrl
    }
    if (!avatarUrl){
      return (
        <Button
          circular
          style={buttonStyle}
          onClick={() => { this.props.headerStore.dropzoneRef.open(); }}
        >
          <Icon
            inverted
            size="large"
            name="photo"
          />
        </Button>
      );
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
