/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class RoadmapElements {
  path = '/v1/clients';
  roadmapPath = 'roadmap_elements';
  @observable all = [];
  @observable isLoading = false;
  @observable hasClientName = false;
  @observable currentClient = '';
  @observable currentClientSlug ='';
  @observable currentClientAvatar = '';
  @observable currentClientVision = '';
  @observable clients = [];
  @observable isNameInputDisabled = false;
  @observable isCreateFormClose = true;
  @observable isToggleableFormVisible = true;

  @action resetClientParams() {
    this.hasClientName = false;
    this.currentClient = '';
    this.currentClientSlug = '';
    this.currentClientAvatar = '';
    this.currentClientVision = '';
    this.isNameInputDisabled = false;
    this.isCreateFormClose = true;
    this.isToggleableFormVisible = true;
  }

  @action async fetchAll() {
    this.isLoading = true;
    const response = await Api.get(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}`);
    const status = await response.status;

    if (status === 200) {
      const json = await response.json();
      this.all = await json;
      const fetchAgain = await this.checkIndex();
      this.isLoading = false;
      if (fetchAgain) {
        this.fetchAll();
      }
    }
  }

  @action async create(data) {
    const element = this.createRoadmapElementObject(data);
    element.dnd_index = this.all.length;
    const response = await Api.post(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}`, element);
    const status = await response.status;

    if (status === 201) {
      this.fetchAll();
    }
  }
  @action async copy(data) {
    const element = this.createRoadmapElementObject(data);
    element.dnd_index = this.all.length;
    const response = await Api.post(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}`, element);
    const newcards = this.all;
    newcards.push(element);
    this.all = newcards;
    const status = await response.status;
    if (status === 201) {
      console.log(element);
      console.log(this.all);
      this.moveRoadmapElement(element.dnd_index, data.index);
      console.log(this.all);
    }
  }

  @action async update(data) {
    const element = this.createRoadmapElementObject(data);
    element.id = data.id;
    const response = await Api.put(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}/${element.id}`, element);
    const status = await response.status;
    if (status === 200) {
      this.fetchAll();
    }
  }

  @action async updateNoFetch(element) {
    const response = await Api.put(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}/${element.id}`, element);
    const status = await response.status;

    if (status === 200) {
      return true;
    }
    return false;
  }

  @action async delete(elementId) {
    const response = await Api.delete(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}/${elementId}`);
    const status = await response.status;

    if (status === 200) {
      this.fetchAll();
    }
  }

  @action moveRoadmapElement(dragIndex, hoverIndex) {
    const newcards = this.all;
    const dragCard = newcards[dragIndex];

    newcards.splice(dragIndex, 1); // removing what you are dragging.
    newcards.splice(hoverIndex, 0, dragCard); // inserting it into hoverIndex.

    this.checkIndex();
  }

  @action checkIndex() {
    let fetchAgain = false;
    this.all.map((obj, index) => {
      if (obj.dnd_index !== index) {
        obj.dnd_index = index;
        fetchAgain = this.updateNoFetch(obj);
      }
      return obj;
    });
    return fetchAgain;
  }

  createRoadmapElementObject(attrs) {
    return {
      due_date: attrs.dueDate,
      color: attrs.color,
      card_type: attrs.cardType,
      title: attrs.title,
      description: attrs.description,
      call_to_action: attrs.callToActionCaption,
      call_to_action_url: attrs.callToActionURL,
      status: attrs.status,
      name: this.currentClient,
    };
  }

  @action handleClientInputChange = (e, { value }) => {
    this.setClientName(value);
  }

  @action handleClientVisionChange = (e, { value }) => {
    this.setClientVision(value);
  }

  @action setClientVision = (newVision) => {
    this.currentClientVision = newVision;
  }

  @action setClientName = (newName) => {
    this.currentClient = newName;
  }

  @action setClientSlug = (slug) => {
    this.currentClientSlug = slug;
    if (!this.clients) {
      this.getClients();
    }
    this.getClient();
  }

  @action setUpClientObject = (client) => {
    this.currentClient = client.name || '';
    this.currentClientSlug = client.slug || '';
  }

  @action async getClients() {
    this.isLoading = true;
    const response = await Api.get(this.path);
    const status = await response.status;
    if (status === 200) {
      const json = await response.json();
      this.clients = await json;
      this.isLoading = false;
      if (this.currentClient) {
        this.setClientSlug(this.clients.filter(client =>
          client.name === this.currentClient)[0].slug);
        this.hasClientName = true;
      }
      if (this.currentClientSlug) {
        this.setClientName(this.clients.filter(client =>
          client.slug === this.currentClientSlug)[0].name);
        this.hasClientName = true;
      }
    }
  }

  @action async createClient() {
    const response = await Api.post(this.path, { name: this.currentClient });
    const status = await response.status;
    if (status === 201) {
      this.getClients();
    }
  }

  @action async getClient() {
    const response = await Api.get(`${this.path}/${this.currentClientSlug}`);
    const status = await response.status;

    if (status === 200) {
      const json = await response.json();
      this.currentClientAvatar = json.avatar;
      this.currentClientVision = json.vision;
    }
  }

  @action async updateClient() {
    const response = await Api.put(`${this.path}/${this.currentClientSlug}`, this.createClientObject());
    const status = await response.status;

    if (status !== 200) {
      // empty
    }
  }

  @action async updateClientVision() {
    this.updateClient();
  }

  @action async updateClientAvatar(clientAvatar) {
    this.currentClientAvatar = clientAvatar;
    this.updateClient();
  }

  createClientObject() {
    const client = {
      name: this.currentClient,
      avatar: this.currentClientAvatar,
      vision: this.currentClientVision,
      slug: this.currentClientSlug,
    };
    return client;
  }

  @action toggleDissableClientNameInput() {
    this.isNameInputDisabled = !this.isNameInputDisabled;
  }

  @action toggleCreateForm() {
    this.isCreateFormClose = !this.isCreateFormClose;
  }

  @action togglePlusButton() {
    this.isToggleableFormVisible = !this.isToggleableFormVisible;
  }
}

export default new RoadmapElements();
