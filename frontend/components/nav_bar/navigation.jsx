import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const loggedOut = () => (
    <nav className='nav-bar'>
      <Link to='/'>
        <img className='nav-logo' src={window.images.mainLogo}/>
      </Link>
      <Link to='/login'>Log in</Link>
      <Link to='/signup'>
        <button className='signup-button'>Sign up</button>
      </Link>
    </nav>
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
