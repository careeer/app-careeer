/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class Subscription {
  subscription = '/v1/subscription';
  originalPlan = ""

  @observable previewCost = 0;
  @observable cardErrors = "";
  @observable cardSuccess = "";
  @observable planCost = "200";
  @observable prorationDate = 0;
  @observable isLoading = false;
  @observable showSelected = true;
  @observable transactionDate = "";
  @observable disableSubmit = true;
  @observable animationVisible = false;
  @observable isDeleteModalOpen = false;
  @observable selectedPlan = "Standard";
  @observable isUpgradeModalOpen = false;
  @observable subscriptionStep = "intro";
  @observable subscriptionAction = "none";
  @observable planName = "Standard track";
  @observable subscribed = false;
  @observable subscriptionEndDate = "";
  @observable currentSubscriptionName = "";
  @observable isDowngradeModalOpen = false;
  @observable currentSubscriptionCost = "0";
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

  @action resetChangePlan() {
    this.populateSelectedPlanInfo(this.originalPlan);
    this.subscriptionAction = "none";
  }

  @action async getPlan() {
    const response = await Api.get(`${this.subscription}`);
    const status = await response.status;

    if (status === 200) {
      const body = await response.json();
      this.subscriptionStatus = body.subscription_status;
      this.subscribed = body.subscribed;
      console.log(this.subscriptionStatus);
      console.log(this.subscribed);
      this.originalPlan = body.plan;
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
      this.currentSubscriptionName = "Fast track";
    } else if (this.selectedPlan === "Starter") {
      this.planCost = "100";
      this.planName = "Self starter";
      this.currentSubscriptionCost = "100";
      this.currentSubscriptionName = "Self starter";
    } else {
      this.planCost = "200";
      this.planName = "Standard track";
      this.currentSubscriptionCost = "200";
      this.currentSubscriptionName = "Standard track";
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

  @action async upgradeSubscription(callBack) {
    this.setIsLoading(true);
    const response = await Api.post(
      `${this.subscription}/upgrade`, {
        plan: this.selectedPlan,
        proration_date: this.prorationDate,
      }
    );
    const status = await response.status;

    if (status === 200) {
      this.setIsLoading(false);
      if (callBack) {
        callBack();
      }
    } else if (status === 402) {
      const body = await response.json();
      this.cardErrors = body.error;
      console.log(this.cardErrors);
      this.setIsLoading(false);
    }
  }

  @action async downgradeSubscription(callBack) {
    this.setIsLoading(true);
    const response = await Api.post(
      `${this.subscription}/downgrade`, {
        plan: this.selectedPlan,
      }
    );
    const status = await response.status;

    if (status === 200) {
      this.setIsLoading(false);
      if (callBack) {
        callBack();
      }
    } else if (status === 402) {
      const body = await response.json();
      this.cardErrors = body.error;
      console.log(this.cardErrors);
      this.setIsLoading(false);
    }
  }

  @action async previewCharges(callBack) {
    this.setIsLoading(true);
    const response = await Api.post(
      `${this.subscription}/preview`, {
        plan: this.selectedPlan,
      }
    );
    const status = await response.status;

    if (status === 200) {
      const body = await response.json();

      this.previewCost = body.cost;
      this.prorationDate = body.proration_date;
      this.transactionDate = body.next_transaction;

      this.setIsLoading(false);
      if (callBack) {
        callBack();
      }
    } else {
      this.setIsLoading(false);
    }
  }

  @action async cancelSubscription(callBack) {
    this.setIsLoading(true);
    const response = await Api.delete(this.subscription);
    const status = await response.status;

    if (status === 200) {
      this.setIsLoading(false);
      if (callBack) {
        callBack();
      }
    } else if (status === 400) {
      this.setIsLoading(false);
    }
  }
}

export default new Subscription();
