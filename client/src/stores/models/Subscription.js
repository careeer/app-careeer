/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class Subscription {
  // account = '/v1/accounts';

  @observable isLoading = false;
  @observable showSelected = true;
  @observable cardErrors = "";
  @observable selectedPlan = "Standard";
  @observable subscriptionStep = "intro";
  @observable planName = "Standard track";

  @action setIsLoading(status) {
    this.isLoading = status;
  }

  @action updateStep(step) {
    this.subscriptionStep = step;
  }

  @action toggleShowSelected() {
    const isSelectedPlanShowing = this.showSelected;
    this.showSelected = !isSelectedPlanShowing;
  }

  @action onPlanClick(plan, planName) {
    this.selectedPlan = plan;
    this.planName = planName;
  }

  @action handleCardErrors(event) {
    if (event.error) {
      this.cardErrors = event.error.message;
    } else {
      this.cardErrors = '';
    }
  }
}

export default new Subscription();
