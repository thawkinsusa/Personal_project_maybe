import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Users from '../Users/user'
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
        console.log('props search', this.state.users)

        let { users } = this.state
        console.log('users', users)
        return (
            <div className="dash-container">


                <div>{this.state.users.map(users => {
                    return (<div>
                        <Users users={users} key={'specialkey'} componentDidMount={this.componentDidMount} ></Users>
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
