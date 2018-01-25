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
  @observable disableSubmit = true;
  @observable animationVisible = false;
  @observable isDeleteModalOpen = false;
  @observable selectedPlan = "Standard";
  @observable isUpgradeModalOpen = false;
  @observable subscriptionStep = "intro";
  @observable subscriptionAction = "none";
  @observable planName = "Standard track";
  @observable currentSubscriptionCost = "0";
  @observable isDowngradeModalOpen = false;
  @observable cardInfo = { card_brand: "",
                            card_last4: "",
                            card_exp_year: "",
                            card_exp_month: "",
                          };

  @action startAnimation() {
    this.animationVisible = true;
  }

  @action stopAnimation() {
    this.animationVisible = false;
  }

  @action setIsLoading(status) {
    this.isLoading = status;
  }

  @action updateStep(step) {
    this.subscriptionStep = step;
  }

  @action showDeleteModal() {
    this.isDeleteModalOpen = true;
  }

  @action showUpgradeModal() {
    this.isUpgradeModalOpen = true;
  }

  @action showDowngradeModal() {
    this.isDowngradeModalOpen = true;
  }

  @action closeSettingsModals() {
    this.isDeleteModalOpen = false;
    this.isUpgradeModalOpen = false;
    this.isDowngradeModalOpen = false;
  }

  @action toggleShowSelected() {
    const isSelectedPlanShowing = this.showSelected;
    this.showSelected = !isSelectedPlanShowing;
  }

  @action onPlanClick(plan, planName, planCost) {
    this.selectedPlan = plan;
    this.planName = planName;
    this.planCost = planCost;
    this.calculateSubscriptionAction();
  }

  calculateSubscriptionAction = () => {
    const newCost = parseInt(this.planCost);
    const currentCost = parseInt(this.currentSubscriptionCost);
    const difference = newCost - currentCost;

    if (difference !== 0) {
      this.subscriptionAction = (difference > 0) ? "upgrade" : "downgrade";
    } else {
      this.subscriptionAction = "none";
    }
  }

  @action handleCardErrors(event) {
    if (event.error) {
      this.cardErrors = event.error.message;
      this.cardSuccess = '';
    } else {
      this.cardErrors = '';
      this.cardSuccess = '';
    }

    if (event.complete) {
      this.disableSubmit = false;
    } else {
      this.disableSubmit = true;
    }
  }

  @action async getPlan() {
    const response = await Api.get(`${this.subscription}`);
    const status = await response.status;

    if (status === 200) {
      const body = await response.json();
      this.populateSelectedPlanInfo(body.plan);
      if (body.card_last4) {
        this.updateCardInfoObject(body);
      }
    }
  }

  populateSelectedPlanInfo = (plan) => {
    this.selectedPlan = plan;
    if (this.selectedPlan === "Fast") {
      this.planCost = "350";
      this.planName = "Fast track";
      this.currentSubscriptionCost = "350";
    } else if (this.selectedPlan === "Starter") {
      this.planCost = "50";
      this.planName = "Self starter";
      this.currentSubscriptionCost = "50";
    } else {
      this.planCost = "150";
      this.planName = "Standard track";
      this.currentSubscriptionCost = "150";
    }
  }

  updateCardInfoObject = (body) => {
    this.cardInfo.card_brand = body.card_brand;
    this.cardInfo.card_last4 = body.card_last4;
    this.cardInfo.card_exp_year = body.card_exp_year;
    this.cardInfo.card_exp_month = body.card_exp_month;
  }

  @action async handleCardToken(payload, callBack) {
    this.setIsLoading(true);
    const response = await Api.post(
      this.subscription, {
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
      this.startAnimation();

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

  @action async updateCreditCard(payload, callBack) {
    this.setIsLoading(true);
    const response = await Api.put(
      this.subscription, {
        stripeToken: payload.token.id,
        last4: payload.token.card.last4,
        card_type: payload.token.card.brand,
        exp_year: payload.token.card.exp_year,
        exp_month: payload.token.card.exp_month
      }
    );
    const status = await response.status;

    if (status === 200) {
      this.cardSuccess = "Credit card updated"
      this.setIsLoading(false);
      if (callBack) {
        callBack();
      }
    } else if (status === 400) {
      const body = await response.json();
      this.cardErrors = body.error;
      this.setIsLoading(false);
    }
  }
}

export default new Subscription();
