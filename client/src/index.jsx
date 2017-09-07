import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import stores from './stores';
import Show from './components/Show';
import ScrollToTop from './components/Helper/ScrollToTop';
import HttpsRedirect from './components/Helper/HttpsRedirect';

render(
  <Provider
    roadmapElements={stores.roadmapElements}
    headerStore={stores.headerStore}
  >
    <HttpsRedirect>
      <BrowserRouter>
        <ScrollToTop>
          <Show />
        </ScrollToTop>
      </BrowserRouter>
    </HttpsRedirect>
  </Provider>,
  document.getElementById('root'),
);
