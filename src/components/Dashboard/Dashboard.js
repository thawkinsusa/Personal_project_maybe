import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from './Dashboard.css'
export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            username: ' ',
            email: ' ',
            image: ' ',
            backImage: ' '
        }
    }
    render() {
        let { username } = this.props
        return (
            <div className='dashboard'>
                <div className='dashboard-container'>
                    <div className='dashboard-user-contents-container'>
                        <div className='dashboard-img'>image container</div> 
                        <div className='dashboard-game-icons'>Game Icons here</div>
                    </div>
                    <div className='dashboard-menu-options'>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user;
  }
//   export default connect(
//     mapStateToProps,
