import React, { Component } from 'react';
import Login from '../../presentational/login';


class LoginContainer extends Component {
    state = {
        email: '',
        pass: '',
        mode: 'login'
    }

    handleChange = evt => {
        //get target and value
        const name = evt.target.name;
        const value = evt.target.value;
        console.log(name,value);
        //update value
        this.setState({[name]: value});
    }

    handleMode = mode => {
        //Change the state ex: Login, send Email, write code...
        this.setState({ mode });
    }
    render() {
        const { email, pass, mode }=  this.state;
        return (
            <Login email={email} pass={pass} handleChange={this.handleChange} mode={mode} handleMode={this.handleMode} />
        );
    }
}

export default LoginContainer;