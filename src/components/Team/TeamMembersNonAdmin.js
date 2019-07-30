import React, { Component } from 'react'
import { getTeam, getTeamMembers } from '../../ducks/teamReducer';
import { connect } from 'react-redux';
import './TeamMember.css'

class TeamMemberNonAdmin extends Component {
    componentDidMount() {
        this.props.getTeamMembers(this.props.user.user.id)
    }

    render() {
        if (this.props.team.teamMembers[0]) {
            let { team } = this.props
            console.log('this is clg in teamMember', team)
            return (
                <div className='team-member-list'>
                    <div className='team-member-container'>
                    </div>
                    <div className='team-member-list'>

                        <div className='team-member'>
                            <img src={team.teamMembers[0].user_image} className='team-member-photo-container' />
                            Name: {team.teamMembers[0].user_name}
                        </div>
                        {(team.teamMembers.length[1]) ? <div className='team-member'>
                            <img src={team.teamMembers[1].user_image} className='team-member-photo-container' />
                            Name: {team.teamMembers[1].user_name}
                        </div> : <div><div className='team-member'>
                            <img src={team.team[0].team_image} className='team-member-photo-container' />
                            Name: {team.team[0].team_name}</div></div>}
                     
                        {(team.teamMembers.length[2]) ? <div className='team-member'>
                            <img src={team.teamMembers[2].user_image} className='team-member-photo-container' />
                            Name: {team.teamMembers[2].user_name}
                        </div> : <div><div className='team-member'>
                            <img src={team.team[0].team_image} className='team-member-photo-container' />
                            Name: {team.team[0].team_name}</div></div>}
                     
                        {(team.teamMembers.length[3]) ? <div className='team-member'>
                            <img src={team.teamMembers[3].user_image} className='team-member-photo-container' />
                            Name: {team.teamMembers[3].user_name}
                        </div> : <div><div className='team-member'>
                            <img src={team.team[0].team_image} className='team-member-photo-container' />
                            Name: {team.team[0].team_name}</div></div>}
                     
                    </div>
                </div>
            )
        } else { return <div> loading...</div> }
    }
}

function mapStateToProps(state) {
    return { team: state.team, user: state.user, teamMembers: state.teamMembers };
}

export default connect(
    mapStateToProps,
    { getTeam, getTeamMembers }
)(TeamMemberNonAdmin);



