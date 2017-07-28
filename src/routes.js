import React from 'react';

import { Route,
         Redirect,
         IndexRoute } from 'react-router';

import c from './components';

const routes =
  <Route>
    <Redirect from='/' to='/roadmap' />
    <Route path='roadmap' component={c.Layout}>
      <IndexRoute component={c.App} />
    </Route>
  </Route>;

export default routes;
