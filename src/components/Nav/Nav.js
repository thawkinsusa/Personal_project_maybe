import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../ducks/userReducer';
import './Nav.css'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }


    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })

    }
    localLogOut = async () => {
        await this.props.logout()
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <div className='logo'>Logo</div>
                    <div className='menu-options'>
                    <Link to='/dashboard'><button className='nav-link'> Dashboard </button></Link>
                    <Link to='/signup'><button className='nav-link'> Register </button></Link>
                    <Link to='/TeamPage'><button className='nav-link'> Team Page </button></Link>
                    <Link to='/TeamManagement'><button className='nav-link'>TeamManagement</button></Link>
                    <Link to='/login'><button className='nav-link'> Login </button></Link>
                    </div>
                    <button className='menu-btn-content' onClick={this.toggleMenu}>
                        Menu <i class="fa fa-bars"></i>
                    </button>
                </div>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="nav-menu"
                            >
                                <button onClick={this.localLogOut} className="nav-link">Logout</button>
                                <button className='nav-link'> Menu item 4 </button>
                                <button className='nav-link'> Menu item 5 </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state.user;
}

export default withRouter(connect(
    mapStateToProps,
    { logout }
)(Nav));