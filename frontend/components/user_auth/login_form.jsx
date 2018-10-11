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
        const errBox = document.getElementById('errors');
        errBox.classList.remove('hidden');
      }
    }
  }

  render() {

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
          <label htmlFor='login-email' >Email</label>
            <input id='login-email'
              onChange={this.update('email')}
              value={this.state.email}
              type='text'
            />
          <br/>
          <label htmlFor='login-password'>Password</label>
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
              email: 'guest',
              password:'password'
            })}>Log in as Guest
          </button>

          <br/>
          <h2>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </h2>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
