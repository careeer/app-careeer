/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class Subscription {
  subscription = '/v1/subscription';

  @observable cardErrors = "";
  @observable isLoading = false;
  @observable showSelected = true;
  @observable selectedPlan = "Standard";
  @observable subscriptionStep = "intro";
  @observable planName = "Standard track";
  @observable planCost = "150";

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

  @action onPlanClick(plan, planName, planCost) {
    this.selectedPlan = plan;
    this.planName = planName;
    this.planCost = planCost;
  }

  @action handleCardErrors(event) {
    if (event.error) {
      this.cardErrors = event.error.message;
    } else {
      this.cardErrors = '';
    }
  }

  @action async handleCardToken(payload) {
    console.log(this.selectedPlan);
    console.log(payload);

    const response = await Api.post(
      this.subscription,{
        stripeToken: payload.token.id,
        plan: this.selectedPlan,
        plan_name: this.planName,
        plan_cost: this.planCost,
        last4: payload.token.card.last4,
        exp_month: payload.token.card.exp_month,
        exp_year: payload.token.card.exp_year,
        card_type: payload.token.card.brand
      }
    );

    const status = await response.status;

    if (status === 200) {
      const body = await response.json();
      // const { user } = body.data;
      console.log(body);
    }
  }
}

export default new Subscription();
