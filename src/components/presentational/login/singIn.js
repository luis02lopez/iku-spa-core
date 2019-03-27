import React from 'react';
import { FormGroup, FormControl, InputLabel, FilledInput, Grid, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

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
                <a href="#" onClick={() => handleMode('send-email')} className="recover-pass">Recuperar contraseña</a>
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