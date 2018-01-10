/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class Subscription {
  subscription = '/v1/subscription';

  @observable cardErrors = "";
  @observable cardSuccess = "";
  @observable planCost = "150";
  @observable isLoading = false;
  @observable showSelected = true;
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

  @action onPlanClick(plan, planName, planCost) {
    this.selectedPlan = plan;
    this.planName = planName;
    this.planCost = planCost;
  }

  @action handleCardErrors(event) {
    if (event.error) {
      this.cardErrors = event.error.message;
      this.cardSuccess = '';
    } else {
      this.cardErrors = '';
      this.cardSuccess = '';
    }
  }

  @action async handleCardToken(payload, callBack) {
    this.setIsLoading(true);
    const response = await Api.post(
      this.subscription,{
        stripeToken: payload.token.id,
        plan: this.selectedPlan,
        last4: payload.token.card.last4,
        exp_month: payload.token.card.exp_month,
        exp_year: payload.token.card.exp_year,
        card_type: payload.token.card.brand
      }
    );

    const status = await response.status;

    if (status === 200) {
      this.cardSuccess = "Transaction successful"

      if (callBack) {
        callBack();
      }

      this.setIsLoading(false);

    } else if (status === 402) {
      const body = await response.json();
      this.cardErrors = body.error;
      this.setIsLoading(false);
    }
  }
}

export default new Subscription();
