import { observable, action } from 'mobx';
import Api from 'helpers/api';

class RoadmapElements {
  path = '/v1/clients';
  roadmap_path = 'roadmap_elements';
  @observable all = [];
  @observable isLoading = false;
  @observable hasClientName = false;
  @observable currentClient = '';
  @observable currentClientSlug ='';
  @observable clients = [];

  @action async fetchAll() {
    this.isLoading = true;
    const response = await Api.get(`${this.path}/${this.currentClientSlug}/${this.roadmap_path}`);
    const status = await response.status;

    if (status === 200) {
      const json = await response.json();
      this.all = await json;
      this.isLoading = false;
    }
  }

  @action async create(data) {
    const response = await Api.post(`${this.path}/${this.currentClientSlug}/${this.roadmap_path}`, data);
    const status = await response.status;

    if (status === 201) {
      this.fetchAll();
    }
  }

  @action async update(element) {
    this.isLoading = true;
    const response = await Api.put(`${this.path}/${this.currentClientSlug}/${this.roadmap_path}/${element.id}`, element);
    const status = await response.status;

    if (status === 200) {
      this.isLoading = false;
      this.fetchAll();
    }
  }

  @action async delete(elementId) {
    this.isLoading = true;
    const response = await Api.delete(`${this.path}/${this.currentClientSlug}/${this.roadmap_path}/${elementId}`);
    const status = await response.status;

    if (status === 200) {
      this.isLoading = false;
      this.fetchAll();
    }
  }

  @action async toggleStatus(elementId) {
    this.isLoading = true;
    const response = await Api.put(`${this.path}/${this.currentClientSlug}/${this.roadmap_path}/${element.id}`, element);
    const status = await response.status;

    if (status === 200) {
      this.isLoading = false;
      this.fetchAll();
    }
  }

  @action handleClientInputChange = (e, { name, value }) => {
    this.setClientName(value);
  }

  @action setClientName = (newName) => {
    this.currentClient = newName;
  }

  @action setClientSlug = (slug) => {
    this.currentClientSlug = slug;
    if (!this.clients) {
      this.getClients();
    }
  }

  @action setUpClientObject = (client) => {
    this.currentClient = client.name;
    this.currentClientSlug = client.slug;
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
        this.setClientSlug(this.clients.filter(client => client.name === this.currentClient)[0].slug);
        this.hasClientName = true;
      }
      if (this.currentClientSlug) {
        this.setClientName(this.clients.filter(client => client.slug === this.currentClientSlug)[0].name);
        this.hasClientName = true;
      }
    }
  }

  @action async createClient() {
    const response = await Api.post(this.path, {name: this.currentClient});
    const status = await response.status;
    if (status === 201) {
      this.getClients();
    }
  }
}

export default new RoadmapElements();
