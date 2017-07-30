import { observable, action } from 'mobx';
import Api from 'helpers/api';

class RoadmapElements {
  path = '/roadmap_elements';
  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    this.isLoading = true;
    const response = await Api.get(this.path);
    const status = await response.status;

    if (status === 200) {
      const json = await response.json();
      this.all = await json;
      this.isLoading = false;
    }
  }

  @action async create(data) {
    const response = await Api.post(this.path, data);
    const status = await response.status;

    if (status === 201) {
      this.fetchAll();
    }
  }

  @action async update(element) {
    console.log(element);
    this.isLoading = true;
    const response = await Api.put(`${this.path}/${element.id}`, element);
    const status = await response.status;

    if (status === 200) {
      this.isLoading = false;
      this.fetchAll();
    }
  }

  @action async delete(elementId) {
    this.isLoading = true;
    const response = await Api.delete(`${this.path}/${elementId}`);
    const status = await response.status;

    if (status === 200) {
      this.isLoading = false;
      this.fetchAll();
    }
  }

  @action toggleStatus(elementId) {
    this.all = this.all.slice().map((roadmapElement) => {
      if (roadmapElement.id === elementId) {
        return Object.assign({}, roadmapElement, {
          isStatusComplete: !roadmapElement.isStatusComplete
        });
      } else {
        return roadmapElement;
      }
    });
  }
}

export default new RoadmapElements();
