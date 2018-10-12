import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import MainNavContainer from './nav_bar/main_nav_container';
import LoginNavContainer from './nav_bar/login_nav_container';
import LoginFormContainer from './user_auth/login_form_container';
import SignupNavContainer from './nav_bar/signup_nav_container';
import SignupFormContainer from './user_auth/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className='main-body'>
    <Switch>
      <AuthRoute path='/login' component={LoginNavContainer} />
      <AuthRoute path='/signup' component={SignupNavContainer} />
      <Route path='/' component={MainNavContainer} />
    </Switch>
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
