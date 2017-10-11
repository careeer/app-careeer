/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Image, Button, Icon } from 'semantic-ui-react';

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
          className="uploadButton"
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
        alt=""
        avatar
        className="avatar"
        src={avatarUrl}
        onClick={() => { this.props.headerStore.dropzoneRef.open(); }}
      />
    );
  }
}

export default ImageAvatar;
