import React, { Component } from 'react';
import Login from '../../presentational/login';


class LoginContainer extends Component {
    state = {
        email: '',
        pass: ''
    }

    handleChange = evt => {
        //get target and value
        const name = evt.target.name;
        const value = evt.target.value;
        console.log(name,value);
        //update value
        this.setState({[name]: value});
    }
    render() {
        const { email, pass }=  this.state;
        return (
            <Login email={email} pass={pass} handleChange={this.handleChange} />
        );
    }
}

export default LoginContainer;