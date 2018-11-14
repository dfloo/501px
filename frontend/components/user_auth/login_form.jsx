import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    this.idx = 0;
    this.idx2 = 0;
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
    this.props.history.push('/photos')
    const splashPhotos = document.getElementById('splash-photos');
    splashPhotos.classList.add('hidden')
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

  loginGuest() {
    const speed = 100;
    const text1 = "guest@email.com";
    const text2 = "password";

    if (this.idx < text1.length) {
      this.setState({
        email: this.state.email + text1.charAt(this.idx)
      }, () => {
        this.idx++;
        setTimeout(this.loginGuest, speed);
      });
    } else if (this.idx2 < text2.length) {
      this.setState({
        password: this.state.password + text2.charAt(this.idx2)
      }, () => {
        this.idx2++;
        setTimeout(this.loginGuest, speed);
      });
    } else {
      const user = Object.assign({}, this.state);
      this.props.login(user)
      this.props.history.push('/photos')
      const splashPhotos = document.getElementById('splash-photos');
      splashPhotos.classList.add('hidden')
    }
  }

  render() {

    const hideErrorsBox = () => {
      const errorsBox = document.getElementById('errors');
      errorsBox.classList.add('hidden')
    }

    return <div className="login-main-container">
        <div id="errors" className="errors hidden">
          <ul>
            <li>{this.renderErrors()}</li>
          </ul>
          <button onClick={hideErrorsBox}>x</button>
        </div>
        <div className='login-form-div'>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <h1>Log In to 501px</h1>
            <label id="email-label">Email</label>
            <input id="login-email" onChange={this.update("email")} value={this.state.email} type="text" />
            <br />
            <label id="pw-label">Password</label>
            <input id="login-password" onChange={this.update("password")} value={this.state.password} type="password" />
            <br />
            <button type="submit">Log in</button>
            <br />
          </form>
          <button onClick={this.loginGuest}>Log in as Guest</button>

          <br />
          <h2>
            Don't have an account?&nbsp;
            <Link to="/signup">Sign up</Link>
          </h2>
        </div>
      </div>;
  }
}

export default withRouter(LoginForm);

