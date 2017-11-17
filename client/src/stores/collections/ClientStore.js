/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class ClientStore {
  path = '/v1/clients';
  @observable isClientLoading = false;
  @observable hasClientName = false;
  @observable currentClient = '';
  @observable currentClientSlug ='';
  @observable currentClientAvatar = '';
  @observable currentClientVision = '';
  @observable clients = [];

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
    this.isClientLoading = true;
    const response = await Api.get(this.path);
    const status = await response.status;
    if (status === 200) {
      const json = await response.json();
      const clientArray = await json.data;
      this.clients = clientArray.filter(client => client.client_status !== 'archived');
      this.isClientLoading = false;
      if (this.currentClient) {
        const clientObject = this.clients.filter(client =>
          client.name === this.currentClient)[0];
        this.setClientSlug(clientObject.slug);
        this.calculateAccountStatus(clientObject);
        this.hasClientName = true;
      }
      if (this.currentClientSlug) {
        const clientObject = this.clients.filter(client =>
          client.slug === this.currentClientSlug)[0];
        this.setClientName(clientObject.name);
        this.calculateAccountStatus(clientObject);
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

  @action async createClientWithDefaults(arrayOfDefaults) {
    this.isDefaultLoading = true;
    const response = await Api.post(this.path, { name: this.currentClient, account_type: "free trial" });
    const status = await response.status;

    if (status === 201) {
      this.getClientsWithDefaults(arrayOfDefaults);
    }
  }

  @action async getClientsWithDefaults(arrayOfDefaults) {
    const response = await Api.get(this.path);
    const status = await response.status;
    if (status === 200) {
      const json = await response.json();
      const clientArray = await json.data;
      this.clients = clientArray.filter(client => client.client_status !== 'archived');
      if (this.currentClient) {
        const clientObject = this.clients.filter(client =>
          client.name === this.currentClient)[0];
        this.setClientSlug(clientObject.slug);
        this.calculateAccountStatus(clientObject);

        for (const i in arrayOfDefaults){
          await this.create(arrayOfDefaults[i], false);
        }
        await this.fetchAll();
        this.hasClientName = true;
        this.isDefaultLoading = false;
      }
    }
  }

  @action async copyClient(copiedFrom, newName) {
    const clientObject = this.getClientObjectFromId(copiedFrom);
    clientObject.new_name = newName;

    const response = await Api.post(`${this.updatePath}/${copiedFrom}`, clientObject);
    const status = await response.status;
    if (status === 200) {
      this.getClients();
    }
  }

  @action async getClient() {
    const response = await Api.get(`${this.path}/${this.currentClientSlug}`);
    const status = await response.status;

    if (status === 200) {
      const json = await response.json();
      this.currentClientAvatar = json.data.user.avatar;
      this.currentClientVision = json.data.user.vision;
    }
  }

  @action async updateClient() {
    const response = await Api.put(`${this.path}/${this.currentClientSlug}`, this.createClientObject());
    const status = await response.status;

    if (status === 200) {
      // empty
    }
  }

  @action async archiveClient(clientId) {
    const clientObject = this.getClientObjectFromId(clientId);
    clientObject.client_status = "archived";
    const response = await Api.put(`${this.path}/${clientObject.slug}`, clientObject);
    const status = await response.status;
    if (status === 200) {
      this.getClients();
    }
  }

  @action async updateClientVision() {
    this.updateClient();
  }

  @action async updateClientAvatar(clientAvatar) {
    this.currentClientAvatar = clientAvatar;
    this.updateClient();
  }

  createClientObject = () => {
    const client = {
      name: this.currentClient,
      avatar: this.currentClientAvatar,
      vision: this.currentClientVision,
      slug: this.currentClientSlug,
    };
    return client;
  }

  getClientObjectFromId = (clientId) => {
    const clientObject = this.clients.filter(client =>
      client.slug === clientId)[0];
    return clientObject;
  }

  @action toggleDissableClientNameInput() {
    this.isNameInputDisabled = !this.isNameInputDisabled;
  }
}
