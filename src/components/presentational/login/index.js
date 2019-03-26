import React from 'react';
import { Grid } from '@material-ui/core';

import SignIn from './singIn';
import SendEmail from './recoveryPassword/sendEmail';


import './index.css';

const Login = ({email, pass, handleChange,mode, handleMode}) => (
    <Grid container justify="center" className ="login-container">
        <Grid item xs={5} className="login">
            <Grid container justify="center">
                <img className="login-logo" src={require("../../../assets/images/logo.png")} alt="Logo" />
            </Grid>

           <Grid className="login-form-container" container direction="column">
                <Grid item xs>
                    <h4 className="email-title">{mode !== 'login' ? 'Recuperar contraseña' : ''}</h4>
                </Grid>
                <Grid item xs className="login-form">
                    {mode === 'login' ? <SignIn email={email} pass={pass} handleChange={handleChange} handleMode={handleMode} />
                    : <SendEmail />}
                </Grid>
           </Grid>


        </Grid>
    </Grid>);


export default Login;