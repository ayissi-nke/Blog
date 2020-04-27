import React, { Component } from 'react'
import './hero.css'
import Card from './card'
import Logo from './logo'
import Navbar from './Navbar'

export class hero extends Component {
    render() {
        return (
            <div>
                <Card>
                    <div style= {{padding:'50px 0'}}>
                       <Logo/>
                    </div>    
                   
                    <Navbar></Navbar>
               </Card>
                
            </div>
        )
    }
}

export default hero
