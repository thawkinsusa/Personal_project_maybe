import React, { Component } from 'react'
import { getTeam, getTeamMembers } from '../../ducks/teamReducer';
import { connect } from 'react-redux';
import './TeamMember.css'

class TeamMemberNonAdmin extends Component {
    componentDidMount() {
        this.props.getTeamMembers(this.props.user.user.id)
    }

    render() {
         
        if(this.props.team.teamMembers.length)
        {return (
           <div>
               {this.props.team.teamMembers.map(member => <div className='team-member' key={member.id}><img src={member.user_image} className='team-member-photo-container' />Username: {member.user_name}</div>)}
    
            </div> 
        )}
        else {
            return <div>Loading</div>
        }
        }
    }  

function mapStateToProps(state) {
    return { team: state.team, user: state.user, teamMembers: state.teamMembers };
}

export default connect(
    mapStateToProps,
    { getTeam, getTeamMembers }
)(TeamMemberNonAdmin);



