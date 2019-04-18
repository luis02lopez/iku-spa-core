import React from 'react';
import { Grid } from '@material-ui/core';
import { Route, Switch, Redirect } from "react-router-dom";


import './index.css';

const Login = ({routes}) => (
    <Grid container justify="center" className ="login-container">
        <Grid item xs={5} className="login">
            <Grid container justify="center">
                <img className="login-logo" src={require("../../../assets/images/logo.png")} alt="Logo" />
            </Grid>

           <Grid className="login-form-container" container direction="column">
                <Grid item xs className="login-form">
                  <Switch>
                    <Redirect from="/login" exact to="/login/sign_up" />
                    {
                        routes.map(route => (
                            <Route key={route.path} path={route.path} render={(props) => 
                                <route.component {...props} componentProps={route.componentProps && route.componentProps}/> }/>
                        ))
                    }
                  </Switch>
                </Grid>
           </Grid>


        </Grid>
    </Grid>);


export default Login;