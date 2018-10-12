import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.errors !== prevProps.errors) {
      if (this.props.errors.length > 0) {
        const errBox = document.getElementById('errors');
        errBox.classList.remove('hidden');
        const signupPw = document.getElementById('signup-password');
        if (signupPw) {
          signupPw.id = 'error';
        }
        const signupEmail = document.getElementById('signup-email');
        if (signupEmail) {
          signupEmail.id ='error';
        }
        const emailLabel = document.getElementById('email-label');
        if (emailLabel) {
          emailLabel.id ='label-error';
        }
        const pwLabel = document.getElementById('pw-label');
        if (pwLabel) {
          pwLabel.id ='label-error';
        }
      }
    }
  }

  render() {

    //refactor these methods into a shared file for nav signup and login

    const showGreenSignupBtn = () => {
      const signupButton = document.getElementById('green-signup');
      signupButton.classList.remove('hidden');
    }

    const hideGreenSignupBtn = () => {
      const signupButton = document.getElementById('green-signup');
      signupButton.classList.add('hidden');
    }

    const hideLoginButton = () => {
      const loginButton = document.getElementById('login');
      loginButton.classList.add('hidden');
    }

    const showLoginButton = () => {
      const loginButton = document.getElementById('login');
      loginButton.classList.remove('hidden');
    }

    const hideErrorsBox = () => {
      const errorsBox = document.getElementById('errors');
      errorsBox.classList.add('hidden')
    }

    return(
      <div className='signup-main-container'>
        <div id='errors' className='errors hidden'>
          <ul>
            <li>{this.renderErrors()}</li>
          </ul>
          <button onClick={hideErrorsBox}>x</button>
        </div>

        <form className='signup-form' onSubmit={this.handleSubmit}>
          <h1>Join 501px</h1>
          <h2> Share your photos, get inspired, and grow your skills</h2>
          <br/>
          <label id='email-label'>Email</label>
          <input id='signup-email'
            onChange={this.update('email')}
            value={this.state.email}
            type='text'
          />
          <br/>
          <label id='pw-label'>Password</label>
          <input id='signup-password'
            onChange={this.update('password')}
            value={this.state.password}
            type='password'
          />
          <br/>
          <button type='submit'>Sign up</button>
          <br/>
          <h3>By signing up, you agree to our Terms of Service</h3>
          <h3>
            Already have an account? <Link to='/login'
              onClick={() => {showGreenSignupBtn(); hideLoginButton()}}
            >Log in</Link>
          </h3>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
