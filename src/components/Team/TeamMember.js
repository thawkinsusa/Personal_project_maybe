import React, { Component } from 'react'
import { getTeam, getTeamMembers, deleteTeamMember } from '../../ducks/teamReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './TeamMember.css'

class TeamMember extends Component {
    componentDidMount() {
        this.props.getTeamMembers(this.props.user.user.id)
    }
    kick = (user_id) => {
       
        let teamId = this.props.teamId
        this.props.deleteTeamMember(user_id, teamId)

    }

    render() {
     
        if(this.props.team.teamMembers.length)
        {return (
           <div className='team-member-container'>
               {this.props.team.teamMembers.map(member => <div className='team-member' key={member.id}><div className='member-img-container'><img src={member.user_image} className='team-member-photo-container' /></div><div classname='member-db-info'> Username: {member.user_name}</div><button onClick={() => {this.kick(member.id)}}>Kick Member</button></div>)}
    
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
            { getTeam, getTeamMembers, deleteTeamMember }
        )(TeamMember);



