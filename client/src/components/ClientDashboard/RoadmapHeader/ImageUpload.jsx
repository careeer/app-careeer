/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import sha1 from 'sha1';
import superagent from 'superagent';
import Dropzone from 'react-dropzone';

@inject('headerStore') @observer
class ImageUpload extends Component {
  handleAvatarUpload = (files) => {
    this.uploadFile(files[0]);
  }

  uploadFile = (image) => {
    const timeStamp = Date.now() / 1000;
    const url = process.env.REACT_APP_CLOUDINARY_URL;
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_PRESET;

    const paramsStr = `timestamp=${timeStamp}&upload_preset=${uploadPreset}${process.env.REACT_APP_CLOUDINARY_SECRET}`;
    const sig = sha1(paramsStr);

    const params = {
      api_key: process.env.REACT_APP_CLOUDINARY_KEY,
      timestamp: timeStamp,
      upload_preset: uploadPreset,
      signature: sig,
    };

    const uploadRequest = superagent.post(url);
    uploadRequest.attach('file', image);

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key]);
    });

    uploadRequest.end((err, resp) => {
      if (err) {
        throw err;
      }
      const uploaded = resp.body;
      const transformedUrl = uploaded.secure_url.replace(`v${uploaded.version}`, 'c_fill,g_face,h_100,w_100');
      this.props.saveAvatarUrl(transformedUrl);
    });
  }

  render() {
    return (
      <Dropzone
        accept="image/*"
        multiple={false}
        className="dropZone"
        onDrop={this.handleAvatarUpload}
        ref={(node) => { this.props.headerStore.dropzoneRef = node; }}
      />
    );
  }
}

export default ImageUpload;
