import React from 'react';
import { Grid, FormControl, InputLabel, FilledInput, FormGroup, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'

import './index.css';

const Login = () => (
    <Grid container justify="center" className ="login-container">
        <Grid item xs={4} className="login">
            <Grid container justify="center">
                <img className="login-logo" src={require("../../assets/images/logo.png")} alt="Logo" />
            </Grid>

           <Grid className="login-form-container" container>
                <FormGroup row>
                    <FormControl fullWidth variant="filled" >
                        <InputLabel>Usuario</InputLabel>
                        <FilledInput  autoFocus disableUnderline className="input-login" />
                    </FormControl>

                    <FormControl fullWidth variant="filled" className="mt-4">
                        <InputLabel> 
                            <LockOutlined className="pass-icon" />
                            Contraseña
                        </InputLabel>
                        <FilledInput type="password" disableUnderline className="input-login" />
                    </FormControl>

                    <Grid container justify="space-between" className="mt-4">
                        <Grid container>
                            <a href="#" className="recover-pass">Recuperar contraseña</a>
                        </Grid>
                        <Grid container justify="flex-end">
                            <Button variant="contained" className="">
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </FormGroup>
           </Grid>


        </Grid>
    </Grid>);

export default Login;