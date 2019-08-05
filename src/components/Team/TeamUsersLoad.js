import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import User from '../Users/user'
import './TeamUsersLoad.css'
import { getUsers } from '../../ducks/userReducer';
class TeamUsersLoad extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount() {

        this.props.getUsers()
            .then(res => {
                console.log('res', res);
                this.setState({ users: res.value });
            })

    }

    render() {

        let { users } = this.state

        return (
            <div className="dash-container">


                <div>{users.map(user => {
                    return (<div>
                        <User user={user} key={user.id} teamId={this.props.match.params.teamId}></User>
                    </div>)
                })}
                </div>

            </div>

        )
    }

}

function mapStateToProps(state) {
    return { user: state.user };
}

export default connect(
    mapStateToProps,
    { getUsers }
)(TeamUsersLoad);
