import React from 'react';
import { FormGroup, FormControl, InputLabel, FilledInput, Grid, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const SignIn = ({componentProps}) => (
    
    <FormGroup row>
    {console.log(componentProps)}
        <FormControl fullWidth variant="filled" >
            <InputLabel>Correo</InputLabel>
            <FilledInput  autoFocus type="email" disableUnderline className="input-login" value={componentProps.email} onChange={(e) => componentProps.onChangeLogin(e)} name="email" />
        </FormControl>

        <FormControl fullWidth variant="filled" className="mt-4">
            <InputLabel> 
                <LockOutlined className="pass-icon" />
                Contraseña
            </InputLabel>
            <FilledInput type="password" disableUnderline className="input-login"value={componentProps.pass} onChange={(e) => componentProps.onChangeLogin(e)} name="pass"  />
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

SignIn.propTypes = {
    componentProps: PropTypes.shape({
      email: PropTypes.string.isRequired,
      pass: PropTypes.string.isRequired,
      onChangeLogin: PropTypes.func.isRequired,  
    }).isRequired,
}

export default SignIn;