import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import stores from './stores';
import App from './components/App';
import ScrollToTop from './components/Lib/ScrollToTop';
import HttpsRedirect from './components/Lib/HttpsRedirect';

const Main = () => (
  <StripeProvider
    apiKey={
      process.env.NODE_ENV === 'production'
      ? process.env.STRIPE_KEY
      : 'pk_test_VrMGLNXqyTQdQc8pHnm6RSyC'
    }
  >
    <Provider {...stores}>
      <HttpsRedirect>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </HttpsRedirect>
    </Provider>
  </StripeProvider>
);

render(<Main />, document.getElementById('root'));
