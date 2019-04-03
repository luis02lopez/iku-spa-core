import React from 'react';
import { FormGroup, FormControl, InputLabel, FilledInput, Grid, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

const NewPassword = () => (

    <FormGroup row>
        <FormControl fullWidth variant="filled" >
            <InputLabel>
                <LockOutlined className="pass-icon" />
                Nueva contraseña
            </InputLabel>
            <FilledInput  type="password" autoFocus disableUnderline className="input-login" name="new-pass" />
        </FormControl>

        <FormControl fullWidth variant="filled" className="mt-4">
            <InputLabel> 
                <LockOutlined className="pass-icon" />
                Repetir contraseña
            </InputLabel>
            <FilledInput type="password" disableUnderline className="input-login" name="new-pass-rep" />
        </FormControl>

        <Grid container justify="flex-end" className="mt-4">
            <Grid item>
                <Button variant="contained" className="btn-login">
                    Restablecer
                </Button>
            </Grid>
        </Grid>
    </FormGroup>
)

export default NewPassword;