import React from 'react';

import { Switch, Route } from 'react-router-dom'

import c from './components';

const routes =
  <Switch>
    <Route exact path='/' component={c.Show}/>
    <Route path='/roadmap' component={c.Show}/>
  </Switch>;
  
export default routes;
