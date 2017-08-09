import 'semantic-ui-css/semantic.min.css';
import './index.css';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom'

import stores from './stores';
import Show from './components/Show';

render(
  <Provider roadmapElements={stores.roadmapElements}>
    <BrowserRouter>
      <Show />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
