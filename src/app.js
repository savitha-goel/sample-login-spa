import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Home from './home';
import Header from './header/header';
import Footer from './footer/footer';
import UnauthorizedErr from './error/unauthorizedErr';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <div>
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/unauthorized" component={UnauthorizedErr} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
