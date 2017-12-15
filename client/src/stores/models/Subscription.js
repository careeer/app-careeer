/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class Subscription {
  // account = '/v1/accounts';

  @observable isLoading = false;
  @observable showSelected = true;
  @observable selectedPlan = "Standard";
  @observable planName = "Standard track";
  @observable subscriptionStep = "intro";

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

}

export default new Subscription();
