import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import stores from './stores';
import App from './components/App';
import ScrollToTop from './components/Lib/ScrollToTop';
// import HttpsRedirect from './components/Lib/HttpsRedirect';

render(
  <Provider {...stores}>

    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root'),
);
