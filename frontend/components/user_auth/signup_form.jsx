import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
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

  render() {
    return(
      <div className='login-form-div'>
        <h1>Sign up for 501px</h1>
          <label>Username:
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              className='login-input'
            />
          </label>
          <br/>
          <label>Email:
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
              className='login-input'
            />
          </label>
          <br/>
          <label>Password:
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              className='login-input'
            />
          </label>
      </div>
    );
  }
}

export default withRouter(SignupForm);
