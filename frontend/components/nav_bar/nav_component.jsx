import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {

  const navBarStyle = {
    backgroundImage: `url(${window.images.background})`
  }

  const uploadLinkStyle = {
    backgroundImage: `url(${window.images.sprite})`
  }

  const loggedOut = () => (
    <div className='nav-bar'>
      <div className='nav-left'>
        <Link to='/'>
          <img className='nav-logo' src={window.images.logo}/>
        </Link>
      </div>
      <div className='nav-right'>
        <Link to='/login'>
          <button className='login-button'>Log in</button>
        </Link>
        <Link to='/signup'>
          <button className='signup-button'>Sign up</button>
        </Link>
      </div>
    </div>
  );

  const loggedIn = () => (
    <div className='nav-bar'>
      <div className='nav-left'>
        <Link to='/'>
          <img className='nav-logo' src={window.images.logo}/>
        </Link>
      </div>
      <div className='nav-right'>
        <div className='dropdown'>
          <img className='nav-avatar' src={window.images.avatar}/>
          <ul className='dropdown-content'>
            <li><button>My Profile</button></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );

  return currentUser ? loggedIn() : loggedOut();
};
