import React from 'react';
import { FormGroup, FormControl, InputLabel, FilledInput, Grid, Button } from '@material-ui/core';

const SendEmail = () => (

    <FormGroup root className="width-100">
        <FormControl fullWidth variant="filled" >
            <InputLabel>Correo</InputLabel>
            <FilledInput  autoFocus disableUnderline className="input-login" name="send-email"/>
        </FormControl>
        <Grid container justify="flex-end" className="mt-4">
            <Grid item>
                <Button variant="contained" className="btn-login">
                    Enviar
                </Button>
            </Grid>
        </Grid>
    </FormGroup>

);

export default SendEmail;