import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/userReducer';
import { getTeam } from '../../ducks/teamReducer';
import './Dashboard.css'
class Dashboard extends Component {
    constructor(){
        super()
        this.state= {
            
        }
    }
    componentDidMount() {
        if(this.props.user.id) {
        this.props.getTeam(this.props.user.id)}
        if (!this.props.user.loggedIn) {
            this.props.getUser();
            setTimeout(() => this.props.getTeam(this.props.user.id), 1000)
        }
    }
    render() {
        let { user, error, redirect, users } = this.props;
        console.log('users in dashboard', users)
        if (error || redirect) return <Redirect to="/login" />;
        if (!user.loggedIn) return <div>Loading</div>;
        return (
            <div className='dashboard'>
                <div className='dashboard-container'>
                    <div className='dashboard-user-contents-container'>
                        <div className='dashboard-img-container'>
                            <img src={user.user_image} className='dashboard-img'>
                            </img>
                            <div className='dashboard-user-info-bottom-container'>
                                <div className='dashboard-icons'>
                                </div>
                                <div className='dashboard-user-bottom-info-after-icon-container'>
                                    <p>{user.username}</p>
                                    <p>sad</p>
                                    <p>sad</p>
                                    <p>sad</p>
                                    <p>sad</p>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard-user-info-top-container'>

                            <div className='dashboard-db-info'>username: {user.user_name}</div>
                            <div className='dashboard-db-info'>Email: {user.user_email}</div>
                            <div className='dashboard-db-info'>Memeber since: {user.user_join_date}</div>
                        </div>
                    </div>
                    <div className='dashboard-menu-options'>
                    <button className='dashboard-links'> My Teams</button>
                        <button className='dashboard-links'> My Messages </button>
                        <button className='dashboard-links'> Team Management </button>
                        <button className='dashboard-links'> Team Search </button>
                        <button className='dashboard-links'> Home </button>
                        <button className='dashboard-links'> Home </button>
                        <button className='dashboard-links'> Home </button>
                        <button className='dashboard-links'> Home </button>
                    </div>
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
    { getUser, getTeam }
)(Dashboard);