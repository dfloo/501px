import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {

  const navBarStyle = {
    backgroundImage: `url(${window.images.background})`
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
    <nav className='nav-bar'>
      <h2 className='header-name'>
        Welcome back, {currentUser.username}
      </h2>
      <button className='header-button' onClick={logout}>
        Log out
      </button>
    </nav>
  );

  return currentUser ? loggedIn() : loggedOut();
};
