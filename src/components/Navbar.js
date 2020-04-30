import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'

import './navbar.css'


export class Navbar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             search:false
        }

    }
     
    openSearch = ()=> {
        this.setState({
            search:true
        });
        
    }

    submitSearch = (e) =>{
        e.preventDefault();
    
    }
    render() {
        
        const searchClasse = this.state.search ? 'searchInputactive' : 'searchInput'
        return (
            <div className='navbar'>
                <ul className="navbarmenu">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/post">POST</NavLink></li>
                    <li><NavLink to="/about-us">ABOUT US </NavLink></li>
                    <li><NavLink to="contact-us">CONTACT US</NavLink></li>
                </ul>
                <div className="search">
                    <form onSubmit={this.submitSearch}>
                        <input className={searchClasse} type="text" placeholder="Search" />

                        <img onClick={this.openSearch}  className="searchIcon" alt="SERACH" src={require('./SearchIcon.png')}/>
                    </form>    
                </div>
            
            </div>
        )
    }
}

export default Navbar
