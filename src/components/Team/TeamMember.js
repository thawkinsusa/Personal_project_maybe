import React, { Component } from 'react'
import { getTeam } from '../../ducks/teamReducer';
import { connect } from 'react-redux';
import './TeamMember.css'

class TeamMember extends Component {
    componentDidMount() {
        this.props.getTeam()
    }

    render() {
        if (this.props.team.team[0]) {
            let { team } = this.props
            console.log('this is clg in teamMember', team)
            return (
                <div className='team-member-list'>
                    <div className='team-member'>
                        <div className='team-member-container'>
                            <div className='team-member-photo-container'>
                                <img src={team.team[0].image} className='team-member-photo-container' />
                            </div>
                        Name:{team.team[0].name}<button>Kick Member</button></div>
                        </div>
                    <div className='team-member'> this is where teammember should be</div>
                    <div className='team-member'> this is where teammember should be</div>
                </div>
            )
        } else { return <div> loading...</div> }
    }
}

function mapStateToProps(state) {
    return { team: state.team, user: state.user };
}

export default connect(
    mapStateToProps,
    { getTeam }
)(TeamMember);



