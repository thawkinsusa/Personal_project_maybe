import React, { Component } from 'react'
import styles from './Nav.css'
class Nav extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <div className='logo'>Logo</div>
                <button className='menu-btn-content' onClick={this.showMenu}>
                    Menu <i class="fa fa-bars"></i>
                </button>     
                </div>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="nav-menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button className='nav-link'> Menu item 1 </button>
                                <button className='nav-link'> Menu item 2 </button>
                                <button className='nav-link'> Menu item 3 </button>
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