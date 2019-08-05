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
            user_name: '',
            user_password: '',
            user_email:'',
            user_image:'',
            user_join_date:''
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
        return this.setState({ user_join_date: n })
    }




    signupUser = () => {
        this.time()
        let { user_name, user_password, user_email, user_image, user_join_date } = this.state;
        this.props.signup(user_name, user_password, user_email, user_image, user_join_date);
    };

    render() {
        let { user_name, user_password, user_email, user_image, user_join_date } = this.state
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
                                value={user_name}
                                name="user_name"
                                onChange={this.handleChange}></input>
                            Password:
                <input className='input-user-sub' type="password"
                                value={user_password}
                                name="user_password"
                                onChange={this.handleChange}></input>
                            Email:
                <input className='input-user-sub' type="text"
                                value={user_email}
                                name="user_email"
                                onChange={this.handleChange}></input>
                            User Image:
                <input className='input-user-sub' type="text"
                                value={user_image}
                                name="user_image"
                                onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <button className='sign-button' onClick={this.signupUser}>Register</button>
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