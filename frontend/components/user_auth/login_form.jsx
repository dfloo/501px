import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };
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
    this.props.login(user);
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
        const hideErrBox = () => {
          const errBox = document.getElementById('errors');
          if (errBox) {
            errBox.classList.add('hidden')
          }
        }
        setTimeout(hideErrBox, 3000);
        const errBox = document.getElementById('errors');
        errBox.classList.remove('hidden');
        const loginPw = document.getElementById('login-password');
        if (loginPw) {
          loginPw.id = 'error';
        }
        const loginEmail = document.getElementById('login-email');
        if (loginEmail) {
          loginEmail.id ='error';
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
      <div className='login-main-container'>
        <div id='errors' className='errors hidden'>
          <ul>
            <li>{this.renderErrors()}</li>
          </ul>
          <button onClick={hideErrorsBox}>x</button>
        </div>

        <form className='login-form' onSubmit={this.handleSubmit}>
          <h1>Log In to 501px</h1>
          <label id='email-label'>Email</label>
            <input id='login-email'
              onChange={this.update('email')}
              value={this.state.email}
              type='text'
            />
          <br/>
          <label id='pw-label'>Password</label>
            <input id='login-password'
              onChange={this.update('password')}
              value={this.state.password}
              type='password'
            />
          <br/>
          <button type='submit'>Log in</button>
          <br/>

          <button
            onClick={() => this.props.login({
              email: 'guest@email.com',
              password:'password'
            })}>Log in as Guest
          </button>

          <br/>
          <h2>
            Don't have an account?&nbsp;
            <Link to='/signup'>Sign up</Link>
          </h2>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
