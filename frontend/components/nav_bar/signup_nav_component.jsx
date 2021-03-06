import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className='nav-bar'>
        <div className='nav-left'>
          <Link to='/'>
            <img className='nav-logo' src={window.images.logo_dark}/>
          </Link>
          <a href="https://www.linkedin.com/in/dfloo/">
            <button className="nav-button">Discover</button>
          </a>
          <a href="https://github.com/dfloo/501px#readme">
            <button className="nav-button">About</button>
          </a>
          <a href="https://github.com/dfloo">
            <button className="nav-button">Studio</button>
          </a>
        </div>
        <div className='nav-right'>
          <Link to='/login'>
            <button id='login'
              className='login-button'>Log in
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupNav);
