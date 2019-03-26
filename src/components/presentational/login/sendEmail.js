import React from 'react';
import { FormGroup, FormControl, InputLabel, FilledInput, Grid, Button } from '@material-ui/core';

const SendEmail = () => (

    <FormGroup row>
        <FormControl fullWidth variant="filled" >
            <InputLabel>Usuario</InputLabel>
            <FilledInput  autoFocus disableUnderline className="input-login" name="send-email"/>
        </FormControl>
        <Grid item>
            <Button variant="contained" color="primary">
                Enviar
            </Button>
        </Grid>
    </FormGroup>

);

export default SendEmail;