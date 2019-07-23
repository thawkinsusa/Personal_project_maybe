import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signup } from '../../ducks/userReducer';
import { Redirect } from 'react-router-dom';
import styles from './Signup.css'
 class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: ' ',
            password: ' ',
            email: ' ',
            image: ' ',
            back_img: ' ',
        }

    } handleChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    signupUser = () => {
        let { username, password, email, image, back_img} = this.state;
        console.log('username in signup', username);
        this.props.signup(username, password, email, image, back_img);
    };

    render() {
        let { username, password, email, image, back_img } = this.state
        let {user} = this.props
        console.log('this.props', this.props);
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
                        Background Image:
                <input className='input-user-sub' type="text"
                            value={back_img}
                            name="back_img"
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