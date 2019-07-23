import React, { Component } from 'react'
import styles from './Nav.css'
import routes from '../../routes'
import { Link, HashRouter, Switch } from 'react-router-dom';
import SignUp from '../Signup/Signup';
class Nav extends Component {
    constructor() {
        super();
        this.state = {
          showMenu: false
        };
      }
    
      toggleMenu = () => {
          this.setState({showMenu: !this.state.showMenu})
      }
    

    render() {
        return (

            <div>
                <div className='header'>
                    <div className='logo'>Logo</div>
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
                               <Link to='/signup'><button className='nav-link'>Sign up </button></Link>
                                <Link to='/login'><button className='nav-link'> Login </button></Link>
                                <Link to='/dashboard'><button className='nav-link'> Dashboard </button></Link>
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
export default Nav