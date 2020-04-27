import React, { Component } from 'react'
import './card.css'

export class card extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        )
    }
}

export default card
