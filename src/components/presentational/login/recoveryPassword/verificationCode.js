import React from 'react';
import { FormGroup, FormControl, InputLabel, FilledInput, Grid, Button } from '@material-ui/core';

const VerificationCode = ({ handleMode }) => (

   <Grid container direction="column">
        <Grid xs item className="text text-center">
            <p>Hemos enviado un código de verificación a tu correo electrónico. Digite aquí su código</p>
        </Grid>
        <Grid xs item>
            <FormGroup root className="width-100">
                <FormControl fullWidth variant="filled" >
                    <InputLabel>CÓDIGO DE VERIFICACIÓN</InputLabel>
                    <FilledInput  autoFocus disableUnderline className="input-login" name="send-email"/>
                </FormControl>
               
                <Grid container justify="space-between" className="mt-4">
                    <Grid item>
                        <a href="#" className="recover-pass">Enviar código nuevamente</a>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className="btn-login"  onClick={() => handleMode('new-pass')}>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </FormGroup>
        </Grid>
   </Grid>

);

export default VerificationCode;