import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeam } from '../../ducks/teamReducer';
import { Link } from 'react-router-dom'
import './TeamPage.css'
import { Redirect } from 'react-router-dom'
class TeamManagement extends Component {
    componentDidMount() {

        this.props.getTeam();

    }
    render() {
        if (!this.props.user.user.loggedIn) {
            return <Redirect to='/login' />
        }
        console.log('props teampage', this.props)
        let { team } = this.props;
        return (
            <div className='teampage'>
                <div className='teampage-container'>
                    <div className='teampage-user-contents-container'>
                        <div className='teampage-img-container'>
                            {/* <img src={team.image} className='dashboard-img'/> */}
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

                            {/* <div className='teampage-db-info'>username: {team.name}</div> */}
                            {/* <div className='teampage-db-info'>Email: {users[0].email}</div> */}
                            <div className='teampage-db-info'>Memeber since: ne...</div>
                            <div className='teampage-db-info'>team: Lucifer</div>
                        </div>
                    </div>
                    <div className='teampage-main-team-container'> Your teamSearch
                    <div className='teampage-team-container'>
                            <div className='teampage-team-info'>
                                Team title
                    </div>
                            <div className='teampage-team-members'>
                                <Link to='/TeamSignup'>
                                    <button>Create Team</button>
                                </Link>

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
)(TeamManagement);
