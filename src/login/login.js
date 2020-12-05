import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AuthApi from '../services/authApi';
import './_login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);

    this.state = {
      userName: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSignIn() {
    let userData = {
      'user_name': this.state.userName,
      'password': this.state.password
    };
    AuthApi.login(userData).then((response) => {
      if (response.data.p_out_mssg === 'Success') {
        this.props.history.push('/dashboard');
      } else {
        this.props.history.push('/unauthorized');
      }
    }).catch(() => {
      this.props.history.push('/unauthorized');
    });
  }

  handleSubmit() {
    let userData = {
      'user_name': this.state.userName,
      'password': this.state.password
    };
    AuthApi.login(userData).then((response) => {
      if (response.data.p_out_mssg === 'Success') {
        this.props.history.push('/dashboard');
      } else {
        this.props.history.push('/unauthorized');
      }
    }).catch(() => {
      this.props.history.push('/unauthorized');
    });
  }

  render() {
    return (
      <div className="col d-flex justify-content-center">
        <div className="card card-signin my-5 shadow-lg">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="userName">User Name:</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  className="form-control"
                  placeholder="Enter User Name"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control password"
                  placeholder="Enter your password"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="float-right">
                <button type="button" onClick={this.onSignIn} className="btn btn-secondary btn-sm custom-btn-class">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
