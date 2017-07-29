import { observable, action } from 'mobx';

class RoadmapElements {
  @observable all = [{
    id: 'roadmapElement.title',
    cardType: 'roadmapElement.cardType',
    title: 'roadmapElement.title',
    description: 'roadmapElement.description',
    callToActionCaption: 'roadmapElement.callToActionCaption',
    callToActionURL: 'roadmapElement.callToActionURL',
  }];
  @observable isLoading = false;

  @action async fetchAll() {
    this.isLoading = true;
    const response = await fetch('http://localhost:3000/v1/roadmap_elements');
    const status = await response.status;

    if (status === 200) {
      this.all = await response.json();
    }
  }

  @action async create(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    };

    const request = new Request('http://localhost:3000/v1/roadmap_elements', options);
    const response = await fetch(request);
    const status = await response.status;

    if (status === 201) {
      this.fetchAll();
    }
    // const existing = this.all;
    // this.all = existing.concat(data);
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

  @action delete(elementId) {
    const existing = this.all;
    this.all = existing.filter(
      element => element.id !== elementId
    );
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
