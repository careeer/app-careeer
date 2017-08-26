import { observable } from 'mobx';

class HeaderStore {
  @observable dropzoneRef = {};
}

export default new HeaderStore();
