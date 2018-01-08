import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { StripeProvider } from 'react-stripe-elements';
import './index.css';
import stores from './stores';
import App from './components/App';
import ScrollToTop from './components/Lib/ScrollToTop';
import HttpsRedirect from './components/Lib/HttpsRedirect';

render(
  <StripeProvider apiKey={process.env.STRIPE_KEY}>
    <Provider {...stores}>
      <HttpsRedirect>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </HttpsRedirect>
    </Provider>
  </StripeProvider>,
  document.getElementById('root'),
);
