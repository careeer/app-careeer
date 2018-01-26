import React from 'react';
import PropTypes from 'prop-types';

const SubscriptionChangeMessage = props => (
  <div className="messageBody">
    { props.subscriptionAction === 'upgrade' &&
      <div>
        <h4>
          Upgrade
        </h4>
        <p className="plans">
          one dedicated coach <br />
          personalized career roadmap <br />
          unlimited messaging <br />
        </p>
      </div>
    }
    { props.subscriptionAction === 'downgrade' &&
      <div>
        <h4>
          Downgrade
        </h4>
        <p className="plans">
          one dedicated coach <br />
          personalized career roadmap <br />
          unlimited messaging <br />
        </p>
      </div>
    }
    { props.subscriptionAction === 'none' &&
      <div>
        <h4>
          All plans include
        </h4>
        <p className="plans">
          one dedicated coach <br />
          personalized career roadmap <br />
          unlimited messaging <br />
        </p>
      </div>
    }
  </div>
);

SubscriptionChangeMessage.propTypes = {
  subscriptionAction: PropTypes.string.isRequired,
};

export default SubscriptionChangeMessage;
