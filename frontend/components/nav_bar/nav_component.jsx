import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {

  const hideGreetingBox = () => {
    const greetingBox = document.getElementById('greeting');
    greetingBox.classList.add('hidden')
  }

  setTimeout(hideGreetingBox, 3000);

  const hideLoginButton = () => {
    const loginButton = document.getElementById('login');
    loginButton.classList.add('hidden');
  }

  const showLoginButton = () => {
    const loginButton = document.getElementById('login');
    loginButton.classList.remove('hidden');
  }

  const hideSignupButton = () => {
    const signupButton = document.getElementById('signup');
    signupButton.classList.add('hidden');
  }

  const showSignupButton = () => {
    const signupButton = document.getElementById('signup');
    signupButton.classList.remove('hidden');
  }

  const showGreenSignupBtn = () => {
    const signupButton = document.getElementById('green-signup');
    signupButton.classList.remove('hidden');
  }

  const hideGreenSignupBtn = () => {
    const signupButton = document.getElementById('green-signup');
    signupButton.classList.add('hidden');
  }

  const loggedOut = () => (
    <div className='nav-bar'>
      <div className='nav-left'>
        <Link to='/' onClick={() => {
            showLoginButton();
            showSignupButton();
            hideGreenSignupBtn();
          }}>
          <img className='nav-logo' src={window.images.logo}/>
        </Link>
      </div>
      <div className='nav-right'>
        <Link to='/login'>
          <button id='login'
            className='login-button'
            onClick={() => {
              hideLoginButton();
              hideSignupButton();
              showGreenSignupBtn();
            }}>Log in
          </button>
        </Link>
        <Link to='/signup'>
          <button id='signup'
            className='signup-button'
            onClick={() => {hideSignupButton(); showLoginButton()}}>Sign up
          </button>
          <button id='green-signup'
            className='signup-button hidden'
            onClick={() => {
              hideSignupButton();
              hideGreenSignupBtn();
              showLoginButton()
            }}>Sign up
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
