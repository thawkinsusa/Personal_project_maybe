import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            username: ' ',
            email: ' ',
            image: ' ',
            backImage: ' '   
        }
    }
    render(){
        let {username}= this.props
        return(
            <div>{username}</div>
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