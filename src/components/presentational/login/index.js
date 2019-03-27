import React from 'react';
import { Grid } from '@material-ui/core';

import SignIn from './singIn';
import SendEmail from './recoveryPassword/sendEmail';
import VerificationCode from './recoveryPassword/verificationCode';
import NewPassword from './recoveryPassword/newPassword';


import './index.css';

const Login = ({email, pass, handleChange,mode, handleMode}) => (
    <Grid container justify="center" className ="login-container">
        <Grid item xs={5} className="login">
            <Grid container justify="center">
                <img className="login-logo" src={require("../../../assets/images/logo.png")} alt="Logo" />
            </Grid>

           <Grid className="login-form-container" container direction="column">
                <Grid item xs>
                    <p className="text">{mode !== 'login' ? 'Recuperar contraseña' :
                         mode === 'new-pass' || mode === 'restored-pass' ? 'Restablecer contraseña' : ''}</p>
                </Grid>
                <Grid item xs className="login-form">
                    {mode === 'login' ? <SignIn email={email} pass={pass} handleChange={handleChange} handleMode={handleMode} />
                    : mode === 'send-email' ? <SendEmail handleMode={handleMode} />
                    : mode === 'code' ? <VerificationCode handleMode={handleMode} />
                    : mode === 'new-pass' ? <NewPassword handleMode={handleMode} /> : ''}
                </Grid>
           </Grid>


        </Grid>
    </Grid>);


export default Login;