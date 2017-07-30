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
      this.isLoading = false
      console.log(json);
    }
  }

  @action async create(data) {
    const response = await Api.post(this.path, data);
    const status = await response.status;

    if (status === 201) {
      this.fetchAll();
    }
  }

  @action update(element) {
    this.all = this.all.slice().map((roadmapElement) => {
      if (roadmapElement.id === element.id) {
        return Object.assign({}, roadmapElement, {
          cardType: element.cardType,
          title: element.title,
          description: element.description,
          callToActionCaption: element.callToActionCaption,
          callToActionURL: element.callToActionURL,
        });
      } else {
        return roadmapElement;
      }
    });
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
