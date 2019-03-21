import React from 'react';
import { Grid, FormControl, InputLabel, FilledInput, FormGroup, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'

import './index.css';

const Login = ({email, pass, handleChange}) => (
    <Grid container justify="center" className ="login-container">
        <Grid item xs={5} className="login">
            <Grid container justify="center">
                <img className="login-logo" src={require("../../../assets/images/logo.png")} alt="Logo" />
            </Grid>

           <Grid className="login-form-container" container>
                <FormGroup row>
                    <FormControl fullWidth variant="filled" >
                        <InputLabel>Usuario</InputLabel>
                        <FilledInput  autoFocus disableUnderline className="input-login" name="email" value={email} onChange={handleChange} />
                    </FormControl>

                    <FormControl fullWidth variant="filled" className="mt-4">
                        <InputLabel> 
                            <LockOutlined className="pass-icon" />
                            Contraseña
                        </InputLabel>
                        <FilledInput type="password" disableUnderline className="input-login" name="pass" value={pass} onChange={handleChange} />
                    </FormControl>

                    <Grid container justify="space-between" className="mt-4">
                        <Grid item>
                            <a href="#" className="recover-pass">Recuperar contraseña</a>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" className="btn-login">
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </FormGroup>
           </Grid>


        </Grid>
    </Grid>);


export default Login;