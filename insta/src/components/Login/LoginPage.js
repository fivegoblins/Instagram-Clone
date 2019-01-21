import React, { Component } from 'react';
import { Button, Form, Input, FormGroup } from 'reactstrap';

import IGLogo from '../../assets/iglogo.png';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username = '',
            password = ''
        };
    }

    handleInputChange = event=> {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLogin = event=> {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <Form className='login-form'>
                <img src={IGLogo} alt='Instagram logo' />
                <h3>Log in to see photos and videos of your friends</h3>
                <FormGroup>
                   <Input 
                        type='text'
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleInputChange}
                   /> 
                </FormGroup>
            </Form>
        );
    }
}