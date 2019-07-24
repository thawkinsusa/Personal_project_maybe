import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signup } from '../../ducks/userReducer';
import { Redirect } from 'react-router-dom';
import './Signup.css'
import { stringify } from 'querystring';
class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: ' ',
            password: ' ',
            email: ' ',
            image: ' ',
            date: ' '
        }
        console.log('date', this.state)
    }
    handleChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
        this.time()
    };

    time = () => {
        let d = new Date();
        let n = d.toLocaleDateString();
        return this.setState({ date: n })
    }




    signupUser = () => {
        this.time()
        let { username, password, email, image, date } = this.state;
        this.props.signup(username, password, email, image, date);
    };

    render() {
        let { username, password, email, image, date } = this.state
        let { user } = this.props
        console.log('this.props', this.state.date);
        if (user.loggedIn) return <Redirect to="/dashboard" />;
        return (
            <div className='sign-up-page'>
                <div className='sign-up-container'>
                    <div className='sign-up-logo'>
                        Sign Up
            </div>
                    <div className='sign-up-inside'>
                        <div className='inputs-user'>
                            Username:
                <input className='input-user-sub' type="text"
                                value={username}
                                name="username"
                                onChange={this.handleChange}></input>
                            Password:
                <input className='input-user-sub' type="password"
                                value={password}
                                name="password"
                                onChange={this.handleChange}></input>
                            Email:
                <input className='input-user-sub' type="text"
                                value={email}
                                name="email"
                                onChange={this.handleChange}></input>
                            User Image:
                <input className='input-user-sub' type="text"
                                value={image}
                                name="image"
                                onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <button onClick={this.signupUser}>Register</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state.user;
}

export default connect(
    mapStateToProps,
    { signup }
)(Signup);