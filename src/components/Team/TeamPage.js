import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTeam } from '../../ducks/teamReducer';
import { getAllTeams } from '../../ducks/teamReducer';
import { Link } from 'react-router-dom'
import './TeamPage.css'
import TeamMembersNonAdmin from'./TeamMembersNonAdmin'

class TeamPage extends Component {
    componentDidMount() {
        this.props.getTeam(this.props.user.user.id);


    }
    getTeams = () => {
        this.props.getAllTeams(res => { console.log('res', res) })
    }

    //  this.getTeams()
    render() {
        console.log('props teampage', this.props)
        if (!this.props.user.user.loggedIn) {
            return <Redirect to='/login' />
        }
        if (this.props.team.team[0]) {
            let { user, team, allTeams } = this.props
            return (
                <div className='teampage'>
                    <div className='teampage-container'>
                        <div className='teampage-user-contents-container'>
                            <div className='teampage-img-container'>
                                <img src={user.user.user_image} className='dashboard-img' />
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

                                <div className='teampage-db-info'>username: {user.user.user_name}</div>
                                <div className='teampage-db-info'>Email: {user.user.user_email}</div>
                                <div className='teampage-db-info'>Memeber since: {user.user.user_join_date}</div>
                                <div className='teampage-db-info'>team:{team.team[0].team_name}</div>
                            </div>
                        </div>
                <div className='teamManagement-main-team-container'> {team.team[0].team_name}
                    <div className='teamManagement-team-container'>
                                <div className='teamManagement-team-info'>
                                    <img src={team.team[0].team_image} className='team-photo-container' />
                                </div>
                                        {(team.team.length) ? <TeamMembersNonAdmin /> : <button>You do not have a team</button>}
                                </div>
                            </div>
                        </div>
                    </div>
         
            )
        } else {
            return (<div>

                <Link to='/TeamSignup'>
                    <div className='team-captain'>
                    </div>
                    <button>Create Team</button>
                </Link>
            </div>)
        }
    }
}
function mapStateToProps(state) {
    return { team: state.team, user: state.user, allTeams: state.allTeams };
}

export default connect(
    mapStateToProps,
    { getTeam, getAllTeams }
)(TeamPage);
