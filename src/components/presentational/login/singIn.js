import React from 'react';
import { FormGroup, FormControl, InputLabel, FilledInput, Grid, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";

const SignIn = ({email, pass, handleChange, handleMode}) => (

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
                <Link to="/login/recover_password" className="recover-pass">Recuperar contraseña</Link>
            </Grid>
            <Grid item>
                <Button variant="contained" className="btn-login">
                    Ingresar
                </Button>
            </Grid>
        </Grid>
    </FormGroup>
)

export default SignIn;