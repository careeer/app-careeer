/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class RoadmapElements {
  path = '/v1/clients';
  updatePath = '/update';
  roadmapPath = 'roadmap_elements';
  @observable pendingElements = [];
  @observable incompleteElements = [];
  @observable isLoading = false;
  @observable isClientLoading = false;
  @observable hasClientName = false;
  @observable currentClient = '';
  @observable currentClientSlug ='';
  @observable currentClientAvatar = '';
  @observable currentClientVision = '';
  @observable clients = [];
  @observable isNameInputDisabled = false;
  @observable isCreateFormClose = true;
  @observable isToggleableFormVisible = true;

  @action resetClientParams = () => {
    this.hasClientName = false;
    this.currentClient = '';
    this.currentClientSlug = '';
    this.currentClientAvatar = '';
    this.currentClientVision = '';
    this.isNameInputDisabled = false;
    this.isCreateFormClose = true;
    this.isToggleableFormVisible = true;
    this.isBannerVisible = false;
    this.isCompletedAccordionOpen = false;
  }

  @action async fetchAll() {
    this.isLoading = true;
    const response = await Api.get(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}`);
    const status = await response.status;

    if (status === 200) {
      const json = await response.json();
      this.pendingElements = await json;
      this.sortElements();
      this.buildCompletedAccordionMessage();
      const fetchAgain = await this.checkIndex();
      this.isLoading = false;
      if (fetchAgain) {
        this.fetchAll();
      }
    }
  }

  sortElements = () => {
    this.completedElements = this.pendingElements.filter(function(element){
      return element.status === true;
    });

    this.incompleteElements = this.pendingElements.filter(function(element){
      return element.status !== true;
    });
  }

  checkIndex = () => {
    let fetchAgain = false;
    this.incompleteElements = this.incompleteElements.map((obj, index) => {
      if (obj.dnd_index !== index) {
        obj.dnd_index = index;
        fetchAgain = this.updateNoFetch(obj);
      }
      return obj;
    });
    this.completedElements = this.completedElements.map((obj, index) => {
      if (obj.dnd_index !== index) {
        obj.dnd_index = index;
        fetchAgain = this.updateNoFetch(obj);
      }
      return obj;
    });
    return fetchAgain;
  }

  @action async create(data) {
    const element = this.createRoadmapElementObject(data);
    element.dnd_index = this.pendingElements.length;
    const response = await Api.post(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}`, element);
    const status = await response.status;

    if (status === 201) {
      this.fetchAll();
    }
  }

  @action async copy(data) {
    const element = this.createRoadmapElementObject(data);
    element.dnd_index = data.index;
    const response = await Api.post(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}`, element);
    const status = await response.status;
    if (status === 201) {
      const newcards = this.pendingElements;
      newcards.slice(element.dnd_index, 0, element);
      this.pendingElements = newcards;
      this.fetchAll();
    }
  }

  @action async update(data) {
    const element = this.createRoadmapElementObject(data);
    element.id = data.id;
    element.dnd_index = data.index;

    const response = await Api.put(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}/${element.id}`, element);
    const status = await response.status;
    if (status === 200) {
      const updatedElements = this.pendingElements.map((currentElement) => {
        if (currentElement.id === element.id) {
          return Object.assign(currentElement, element);
        } else {
          return currentElement;
        }
      });
      this.pendingElements = updatedElements;
    }
  }

  @action async toggleStatus(elementId) {
    const element = this.pendingElements.find(function (element) {
      return element.id === elementId;
    });

    element.status = !element.status;

    const response = await Api.put(`${this.path}/${this.currentClientSlug}/${this.roadmapPath}/${element.id}`, element);
    const status = await response.status;
    if (status === 200) {
      const updatedElements = this.pendingElements.map((currentElement) => {
        if (currentElement.id === element.id) {
          return Object.assign(currentElement, element);
        } else {
          return currentElement;
        }
      });
      this.pendingElements = updatedElements;

      if (element.status) {
        this.showBanner();
        this.incompleteElements = this.incompleteElements.filter(function(roadmapEl){
          return roadmapEl.id !== element.id;
        });
        this.completedElements.push(element);
        if (this.completedElements.length === 1) {
          this.isCompletedAccordionOpen = false;
        }
        this.completedElement = element.id;
      } else {
        this.hideBanner();
        this.completedElements = this.completedElements.filter(function(roadmapEl){
          return roadmapEl.id !== element.id;
        });
        this.incompleteElements.unshift(element);
      }
      this.checkIndex();
      this.buildCompletedAccordionMessage();
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
    const newcards = this.incompleteElements;
    const dragCard = newcards[dragIndex];

    newcards.splice(dragIndex, 1); // removing what you are dragging.
    newcards.splice(hoverIndex, 0, dragCard); // inserting it into hoverIndex.

    this.checkIndex();
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

// Clients
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
      const clientArray = await json;
      this.clients = clientArray.filter(client => client.client_status !== 'archived');
      this.isClientLoading = false;
      if (this.currentClient) {
        this.setClientSlug(this.clients.filter(client =>
          client.name === this.currentClient)[0].slug);
        this.hasClientName = true;
        this.calculateCompletedPerDayStat();
      }
      if (this.currentClientSlug) {
        this.setClientName(this.clients.filter(client =>
          client.slug === this.currentClientSlug)[0].name);
        this.hasClientName = true;
        this.calculateCompletedPerDayStat();
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
      this.currentClientAvatar = json.avatar;
      this.currentClientVision = json.vision;
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

  @action toggleCreateForm() {
    this.isCreateFormClose = !this.isCreateFormClose;
  }

  @action togglePlusButton() {
    this.isToggleableFormVisible = !this.isToggleableFormVisible;
  }

  // Congratulate Banner
  @observable isBannerVisible = false;
  @observable completedElement = '';

  @action showBanner() {
    this.isBannerVisible = true;
  }

  @action hideBanner() {
    this.isBannerVisible = false;
  }

  @action undoComplete() {
    this.toggleStatus(this.completedElement);
  }

  // Completed Elements Accordion
  @observable completedElements = [];

  @observable completedAccordionMessage = "";

  @observable completedAccordionIcon = "angle down";

  @observable isCompletedAccordionOpen = false;

  @observable completedPerDaySimpleStat = "";

  @action toggleCompletedElements = () => {
    this.isCompletedAccordionOpen = !this.isCompletedAccordionOpen;
    this.buildCompletedAccordionMessage();
    this.calculateCompletedPerDayStat();
  }

  buildCompletedAccordionMessage = () => {
    let accordionMessage = `${this.completedElements.length} completed action`;
    if (this.completedElements.length > 1) {
      accordionMessage = `${this.completedElements.length} completed actions`;
    }

    if (this.isCompletedAccordionOpen) {
      this.completedAccordionMessage = `Hide ${accordionMessage}`;
      this.completedAccordionIcon = "angle up";
    } else {
      this.completedAccordionMessage = `Show ${accordionMessage}`;
      this.completedAccordionIcon = "angle down";
    }
  }

  @action calculateCompletedPerDayStat = () => {
    if (this.completedElements.length > 0) {
      const clientObject = this.clients.filter(client => client.slug === this.currentClientSlug)[0];
      const createdDate = new Date(clientObject.created_at.split("T")[0]);
      const dateNow = new Date();
      this.completedPerDaySimpleStat =  this.completedElements.length/this.daysBetween(dateNow, createdDate);
    }
  }

  daysBetween(date1, date2) {
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    const date1_ms = date1.getTime();
    const date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    const difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)

  }
}

export default new RoadmapElements();
