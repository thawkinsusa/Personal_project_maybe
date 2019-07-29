import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeam } from '../../ducks/teamReducer';
import { Link } from 'react-router-dom'
import './TeamPage.css'
import { Redirect } from 'react-router-dom'
import TeamMember from './TeamMember'
class TeamManagement extends Component {
    componentDidMount() {

        this.props.getTeam();

    }
    render() {
        if (!this.props.user.user.loggedIn) {
            return <Redirect to='/login' />
        }
        console.log('this props', this.props)
        if (this.props.team.team[0]) {
            let { team } = this.props;
            return (
                <div className='teampage'>
                    <div className='teampage-container'>
                        <div className='teampage-user-contents-container'>
                            <div className='teampage-img-container'>
                                <img src={team.team[0].image} className='dashboard-img' />

                                <div className='teampage-user-info-bottom-container'>
                                    <div className='teampage-icons'>
                                    </div>
                                    <div className='teampage-user-bottom-info-after-icon-container'>
                                    </div>
                                </div>
                            </div>
                            <div className='teampage-user-info-top-container'>
                                <div className='teampage-db-info'>Memeber since: {team.team[0].date}</div>
                                <div className='teampage-db-info'>team:{team.team[0].name}</div>
                            </div>
                        </div>
                        <div className='teampage-main-team-container'> Your teamSearch
                    <div className='teampage-team-container'>
                                <div className='teampage-team-info'>
                                    {team.team[0].name}
                                </div>
                                <div className='teampage-team-members'>
                                    <div className='team-captain'>
                                        Captain: {team.team[0].username}
                                        <TeamMember/>
                                    </div>
                                    <Link to='/TeamSignup'>
                                        <div className='team-captain'>
                                        </div>
                                        <button>Create Team</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else { return <div>loading...</div> }
    }
}
function mapStateToProps(state) {
    return { team: state.team, user: state.user };
}

export default connect(
    mapStateToProps,
    { getTeam }
)(TeamManagement);
