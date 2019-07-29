import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTeam } from '../../ducks/teamReducer';
import './TeamPage.css'
class TeamPage extends Component {
    componentDidMount() {
        this.props.getTeam();
    }
    render() {
        console.log('props teampage', this.props)
        let { user, error, redirect, team } = this.props;
        if (error || redirect) return <Redirect to="/login" />;
        if (!user.loggedIn) return <div>Loading</div>;
        return (
            <div className='teampage'>
                <div className='teampage-container'>
                    <div className='teampage-user-contents-container'>
                        <div className='teampage-img-container'>
                        <img src={user.image} className='dashboard-img'/>
                            <div className='teampage-img'>
                            </div>
                            <div className='teampage-user-info-bottom-container'>
                                <div className='teampage-icons'>
                                </div>
                                <div className='teampage-user-bottom-info-after-icon-container'>
                                </div>
                            </div>
                        </div>
                        <div className='teampage-user-info-top-container'>

                            <div className='teampage-db-info'>username: {user.username}</div>
                            {/* <div className='teampage-db-info'>Email: {users[0].email}</div> */}
                            <div className='teampage-db-info'>Memeber since: {}</div>
                            <div className='teampage-db-info'>team: Lucifer</div>
                        </div>
                    </div>
                    <div className='teampage-main-team-container'> Your teamSearch
                    <div className='teampage-team-container'>
                            <div className='teampage-team-info'>
                                Team title
                    </div>
                            <div className='teampage-team-members'>
                                team member needs to be component

                            </div>
                        </div>
                    <div className='teampage-team-container'>
                            <div className='teampage-team-info'>
                                Team Search
                    </div>
                            <div className='teampage-team-members'>
                                team member needs to be component

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { team: state.team, user: state.user };
}

export default connect(
    mapStateToProps,
    { getTeam }
)(TeamPage);
