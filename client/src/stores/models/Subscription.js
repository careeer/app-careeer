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
  @observable selectedPlan = "Standard";
  @observable subscriptionStep = "intro";
  @observable planName = "Standard track";
  @observable animationVisible = false;
  @observable isDeleteModalOpen = false;
  @observable isUpgradeModalOpen = false;
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

      this.selectedPlan = body.plan;
      if (this.selectedPlan === "Fast") {
        this.planName = "Fast track";
        this.planCost = "350";
      } else if (this.selectedPlan === "Starter") {
        this.planName = "Self starter";
        this.planCost = "50";
      } else {
        this.planName = "Standard track";
        this.planCost = "150";
      }

      if (body.card_last4) {
        this.cardInfo.card_brand = body.card_brand;
        this.cardInfo.card_last4 = body.card_last4;
        this.cardInfo.card_exp_year = body.card_exp_year;
        this.cardInfo.card_exp_month = body.card_exp_month;
      }
    }
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
