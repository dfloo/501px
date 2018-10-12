import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {

  const hideGreetingBox = () => {
    const greetingBox = document.getElementById('greeting');
    greetingBox.classList.add('hidden')
  }

  setTimeout(hideGreetingBox, 3000);

  const loggedOut = () => (
    <div className='nav-bar'>
      <div className='nav-left'>
        <Link to='/'>
          <img className='nav-logo' src={window.images.logo}/>
        </Link>
        <Link to='/'>
          <button className='nav-button'>Discover</button>
        </Link>
        <Link to='/'>
          <button className='nav-button'>About</button>
        </Link>
        <Link to='/'>
          <button className='nav-button'>Studio</button>
        </Link>
      </div>
      <div className='nav-right'>
        <Link to='/login'>
          <button id='login' className='login-button'>
            Log in
          </button>
        </Link>
        <Link to='/signup'>
          <button id='signup' className='signup-button'>
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );

  const loggedIn = () => (
    <div className='nav-bar'>
      <div id='greeting' className='greeting'>
        <h1>Welcome back, {currentUser.email}!</h1>
        <button onClick={hideGreetingBox}>x</button>
      </div>
      <div className='nav-left'>
        <Link to='/'>
          <img className='nav-logo' src={window.images.logo}/>
        </Link>
        <Link to='/'>
          <button className='nav-button'>Discover</button>
        </Link>
        <Link to='/'>
          <button className='nav-button'>About</button>
        </Link>
        <Link to='/'>
          <button className='nav-button'>Studio</button>
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
