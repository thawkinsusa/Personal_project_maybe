import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../ducks/userReducer';
import './user.css'
class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            id: 0
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
        console.log('this.state', this.state)
        return (
            <div className="users-container">

<div className='user-list'>

                    <div className='user'>
                        <p><img src={this.props.users.user_image} className='image-container'/> User Name: {this.props.users.user_name}<button> Add user to team</button></p>

                    </div>
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
)(Users);
