import React, { Component } from 'react';

export default class UnauthorizedErr extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-10 my-4 mx-auto">
          <div className="text-center">
            <div className="error-icon">
              <i className="fa fa-exclamation-triangle fa-2x text-danger" />
            </div>
            <p>Unauthorized! You do not have enough permission to access this application</p>
          </div>
        </div>
      </div>
    );
  }
}
