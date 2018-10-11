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

  render() {
    return(
      <div className='signup-main-container'>
        <div className='signup-form'>
          <h1>Join 501px</h1>
          <h2> Share your photos, get inspired, and grow your skills</h2>
          <br/>
          <label htmlFor='login-email'>Email</label>
          <input id='login-email'
            onChange={this.update('email')}
            value={this.state.email}
            type='text'
          />
          <br/>
          <label htmlFor='signup-password'>Password</label>
          <input id='signup-password'
            onChange={this.update('password')}
            value={this.state.password}
            type='password'
          />
          <br/>
          <button
            className='signup-submit-button'
            onClick={this.handleSubmit}>Sign up
          </button>
          <h3>By signing up, you agree to our Terms of Service</h3>
          <h3>
            Already have an account? <Link to='/login'>Log in</Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
