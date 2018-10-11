import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import NavContainer from './nav_bar/nav_container';
import LoginFormContainer from './user_auth/login_form_container';
import SignupFormContainer from './user_auth/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className='main-body'>
    <NavContainer />
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
