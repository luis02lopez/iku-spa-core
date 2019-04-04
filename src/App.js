import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import LoginContainer from './components/containers/login';

import SendEmail from './components/presentational/login/recoveryPassword/sendEmail';
import VerificationCode from './components/presentational/login/recoveryPassword/verificationCode';
import NewPassword from './components/presentational/login/recoveryPassword/newPassword';
import SignIn from './components/presentational/login/singIn';

import './App.css';

class App extends Component {
  render() {
    const routes = [
      {
        path: "/login",
        component: LoginContainer,
        routes: [
          {
            path: "/login/sign_up",
            component: SignIn
          },
          {
            path: "/login/recover_password",
            component: SendEmail
          },
          {
            path: "/login/code",
            component: VerificationCode
          },
          {
            path: "/login/new_password",
            component: NewPassword
          }
        ]
      }
    ]

    return (
      <Router className="App">
        <Switch>
        <Redirect from="/" exact to="/login" />
          { routes.map( (route,i) => (
            <Route key={i} path={route.path} 
                   render={props => (
                  // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                   )}
              />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
