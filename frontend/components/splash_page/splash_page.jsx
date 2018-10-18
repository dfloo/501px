import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  if (currentUser) {
    return (<div></div>)
  } else {
    return(
      <div className='splash-page'>
        <div className='splash-page-div'>
          <img className='splash-page-image'
            src={window.images.background}/>
          <div className='splash-nav-left'>
            <Link to='/'>
              <img className='splash-nav-logo' src={window.images.logo_light}/>
            </Link>
            <Link to='/'>
              <button className='splash-nav-button'>Discover</button>
            </Link>
            <Link to='/'>
              <button className='splash-nav-button'>About</button>
            </Link>
            <Link to='/'>
              <button className='splash-nav-button'>Studio</button>
            </Link>
          </div>
          <div className='splash-nav-right'>
            <Link to='/login'>
              <button id='splash-login'
                className='splash-nav-button'>
                Log in
              </button>
            </Link>
            <Link to='/signup'>
              <button id='splash-signup'
                className='splash-signup-button'>
                Sign up
              </button>
            </Link>
          </div>
          <h1 className='splash-page-h1'>
            Get inspired and share your best photos
          </h1>
          <h2 className='splash-page-h2'>
            Find your home among the world's
            best photographers.
          </h2>
          <Link to='/signup'>
            <button id='splash-signup-large'
              className='splash-signup-large'>
              Join 501px
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
