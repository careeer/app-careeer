import { observable, action } from 'mobx';

class RoadmapElements {
  path = '/roadmap_elements';
  @observable all = [];
  @observable isLoading = false;

export default new RoadmapElements();
