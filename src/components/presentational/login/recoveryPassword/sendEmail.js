import React from 'react';
import { FormGroup, FormControl, InputLabel, FilledInput, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const SendEmail = ({ handleMode }) => (

    <FormGroup root className="width-100">
        <FormControl fullWidth variant="filled" >
            <InputLabel>Correo</InputLabel>
            <FilledInput  autoFocus disableUnderline className="input-login" name="send-email"/>
        </FormControl>
        <Grid container justify="flex-end" className="mt-4">
            <Grid item>
                <Button variant="contained" className="btn-login">
                    <Link className="link-btn" to="/login/new_password">Enviar</Link>
                </Button>
            </Grid>
        </Grid>
    </FormGroup>

);

export default SendEmail;