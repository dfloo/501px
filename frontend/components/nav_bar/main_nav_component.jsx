import React from 'react';
import { Link } from 'react-router-dom';

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.hideGreetingBox = this.hideGreetingBox.bind(this);
    this.showUploadModal = this.showUploadModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  hideGreetingBox() {
    const greetingBox = document.getElementById('greeting');
    if (greetingBox) {
      greetingBox.classList.add('hidden')
    }
  }

  showUploadModal() {
    const modal = document.getElementById('file-upload-modal');
    if (modal) {
      modal.classList.remove('hidden')
    }
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/');
    const splashPhotos = document.getElementById('splash-photos');
    splashPhotos.classList.remove('hidden')

  }

  componentDidMount() {
    setTimeout(this.hideGreetingBox, 3000);
  }

  render() {
    if (this.props.currentUser) {
      return <div className="nav-bar">
          <div id="greeting" className="greeting">
            <h1>Welcome back, {this.props.currentUser.username}!</h1>
            <button onClick={this.hideGreetingBox}>x</button>
          </div>
          <div className="nav-left">
            <Link to="/photos">
              <img className="nav-logo" src={window.images.logo_dark} />
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
          <div className="nav-right">
            <div className="dropdown">
              <img className="nav-avatar" src={window.images.avatar} />
              <ul className="dropdown-content">
                <li>
                  <button>My Profile</button>
                </li>
                <li>
                  <button onClick={this.handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
            <button className="upload-button" onClick={this.showUploadModal}>
              Upload
            </button>
            <img className="upload-sprite" src={window.images.upload_img} onClick={this.showUploadModal} />
          </div>
        </div>;

    } else {
      return (
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
    }
  }
}
