import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import MainNavContainer from './nav_bar/main_nav_container';
import LoginNavContainer from './nav_bar/login_nav_container';
import LoginFormContainer from './user_auth/login_form_container';
import SignupNavContainer from './nav_bar/signup_nav_container';
import SignupFormContainer from './user_auth/signup_form_container';
import PhotoUploadContainer from './photo_upload/photo_upload_container';
import PhotoIndexContainer from './photo_display/photo_index_container';
import PhotoShowContainer from './photo_display/photo_show_container';
import SplashPageContainer from './splash_page/splash_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// <Route exact path='/' component={SplashPageContainer} />

const App = () => (
  <div className='main-body'>
    <SplashPageContainer />
    <Switch>
      <AuthRoute path='/login' component={LoginNavContainer} />
      <AuthRoute path='/signup' component={SignupNavContainer} />
      <Route path='/' component={MainNavContainer} />
    </Switch>
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Route exact path='/photos' component={PhotoIndexContainer} />
      <Route exact path='/photos/:photoId'
        component={PhotoShowContainer} />
    </Switch>
    <PhotoUploadContainer />
  </div>
);

export default App;

//
// export default App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       photos: {},
//       users: {}
//     };
//     // this.fetchPhotos = this.fetchPhotos.bind(this);
//   }
//
// }
