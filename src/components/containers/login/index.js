import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../../presentational/login';


class LoginContainer extends Component {
    
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
        console.log(mode);
        this.setState({ mode });
    }
    render() {
        const { routes, email,pass } = this.props;
        return (
            <Login email={email} pass={pass} handleChange={this.handleChange} handleMode={this.handleMode} routes={routes} />
        );
    }
}

const mapStateToProps = (state) => ({
    email: state.email,
    pass: state.pass,
});

export default connect(mapStateToProps)(LoginContainer);