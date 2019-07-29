import React, { Component } from 'react'
import { connect } from 'react-redux';
import { teamSignup } from '../../ducks/teamReducer';
import { Redirect } from 'react-router-dom'
import './Signup.css'
class teamRegistration extends Component {
    constructor() {
        super()
        this.state = {
            team_name:'',
            team_image:'',
            team_creation_date: ''

        }
    }
    handleChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
        this.time()
    };

    time = () => {
        let d = new Date();
        let n = d.toLocaleDateString();
        return this.setState({ team_creation_date: n })
    }

    pageRedirect = () => {
        if(this.props.teamSignup())
        return <Redirect to='/teamPage'/>
    }

    teamSignup = () => {
        console.log('props', this.props);
        let { team_name, team_image, team_creation_date } = this.state;
        let {id}=this.props.user.user
        this.props.teamSignup(team_name, team_image, team_creation_date, id);
        
    };

    render() {
        let { team_name, team_image, team_creation_date } = this.state
        let { team } = this.props

        console.log('this.props', this.props);
        return (
            <div className='sign-up-page'>
                <div className='sign-up-container'>
                    <div className='sign-up-logo'>
                     Team Signup
            </div>
                    <div className='sign-up-inside'>
                        <div className='inputs-user'>
                            Team Name:
                <input className='input-user-sub' type="text"
                                value={team_name}
                                name="team_name"
                                onChange={this.handleChange}></input>
                            Team Image:
                <input className='input-user-sub' type="text"
                                value={team_image}
                                name="team_image"
                                onChange={this.handleChange}></input>

                        </div>
                    </div>
                    <button onClick={this.teamSignup}>Register</button>
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
    { teamSignup }
)(teamRegistration);