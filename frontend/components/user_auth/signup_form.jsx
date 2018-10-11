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
      }
    }
  }

  render() {

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
          <button type='submit'>Sign up</button>
          <br/>
          <h3>By signing up, you agree to our Terms of Service</h3>
          <h3>
            Already have an account? <Link to='/login'>Log in</Link>
          </h3>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
