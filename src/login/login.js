
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthApi from '../services/authApi';
import './_login.css';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUserNameChange = e => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSignIn = () => {
    let userData = {
      'user_name': userName,
      'password': password
    };

    AuthApi.login(userData).then((response) => {
      if (response.data.p_out_mssg === 'Success') {
        history.push('/dashboard');
      } else {
        history.push('/unauthorized');
      }
    }).catch(() => {
      history.push('/unauthorized');
    });
  };

  return (
    <div className="col d-flex justify-content-center">
      <div className="card card-signin my-5 shadow-lg">
        <div className="card-body">
          <h5 className="card-title text-center">Sign In</h5>
          <form>
            <div className="form-group">
              <label htmlFor="userName">User Name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                className="form-control"
                placeholder="Enter User Name"
                onChange={handleUserNameChange}
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
                onChange={handlePasswordChange}
              />
            </div>
            <div className="float-right">
              <button type="button" onClick={() => onSignIn()} className="btn btn-secondary btn-sm custom-btn-class">
              Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
