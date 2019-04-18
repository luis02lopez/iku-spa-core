import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from '../../presentational/login';


class LoginContainer extends Component {
    
    handleChange = evt => {
        const { setValue } = this.props; 

        //update value
        setValue(evt);
    }

    render() {
        const { routes } = this.props;
        return (
            <Login routes={routes} />
        );
    }
}

Login.protoTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LoginContainer