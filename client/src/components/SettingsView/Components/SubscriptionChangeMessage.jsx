import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

const SubscriptionChangeMessage = props => (
  <div className="messageBody settings">
    { props.subscriptionAction === 'upgrade' &&
      <div>
        <h4>
          Upgrade subscription
        </h4>
        <Segment basic loading={props.isLoading} compact>
          <p className="description">
            ${props.previewCost} charged today <br />
            ${props.newPlan.cost} will be charged on {props.transactionDate} <br />
          </p>
        </Segment>
      </div>
    }
    { props.subscriptionAction === 'downgrade' &&
      <div>
        <h4>
          Downgrade subscription
        </h4>
        <Segment basic loading={props.isLoading} compact>
          <p className="description">
            {props.currentSubscriptionName} continues unitl February 30th <br />
            ${props.newPlan.cost} charged for {props.newPlan.name} on {props.transactionDate} <br />
          </p>
        </Segment>
      </div>
    }
    { props.subscriptionAction === 'none' &&
      <div>
        <h4>
          All plans include
        </h4>
        <p className="description">
          one dedicated coach <br />
          personalized career roadmap <br />
          unlimited messaging <br />
        </p>
      </div>
    }
  </div>
);

SubscriptionChangeMessage.propTypes = {
  newPlan: PropTypes.shape(
    {
      cost: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  previewCost: PropTypes.number.isRequired,
  transactionDate: PropTypes.string.isRequired,
  subscriptionAction: PropTypes.string.isRequired,
  currentSubscriptionName: PropTypes.string.isRequired,
};

export default SubscriptionChangeMessage;
