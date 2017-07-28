import 'semantic-ui-css/semantic.min.css';
import './index.css';

import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';

import { Provider } from 'mobx-react';

import routes from './routes';
import stores from './stores';

render(
  <Provider roadmapElements={stores.roadmapElements}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
