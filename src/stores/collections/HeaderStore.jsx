import { observable, action } from 'mobx';
import sha1 from 'sha1';
import superagent from 'superagent';

class HeaderStore {
  @observable dropzoneRef = {};
  @observable avatarUrl = '';

  @action uploadFile = (files) => {
    const image = files[0];

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
      this.avatarUrl = uploaded.secure_url;
    });
  }
}

export default new HeaderStore();
