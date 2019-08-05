import React, { Component } from 'react'
import './TeamDisplay.css'
class TeamDisplay extends Component {
    render() {
        return (
            <div className='main-container'>main continer
                <div className='main-left-right-split'>
                    <div className='main-left-container'>dash continer
                    <div className='left-container-info'>Info/dash</div>
                        <div className='left-container-info-second'>Info/dash</div>
                    </div>
                    <div className='main-right-container'>right side container
                    <div className='right-container-info'>Team Info</div>
                        <div className='right-container-info-second'>Team Info</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TeamDisplay