import React, { Component } from 'react'
import './header.css'


export class header extends Component {
    render() {
        return (
                
            <div>
                <header className="header">
                <nav className="headerMenu">
                    <a href="#d">HOME</a>
                    <a href="#sd">ABOUT US </a>
                    <a href="#df">CONCTAT US </a>
                </nav>  
                <div>
                    socials media links
                </div>
                </header>
            </div>    
        )
    }
}

export default header
