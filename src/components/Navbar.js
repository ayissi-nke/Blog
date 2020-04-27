import React, { Component } from 'react'
import './navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <ul className="navbarmenu">
                    <li><a href="#z">HOME</a></li>
                    <li><a href="#z">POST</a></li>
                    <li><a href="#z">ABOUT US </a></li>
                    <li><a href="#z">CONTACT US</a></li>
                </ul>
                <div className="search">
                    <input type="text" placeholder="Search" />

                    <img alt="SERACH" src={require('./Search.png')}/>
                </div>
            
            </div>
        )
    }
}

export default Navbar
