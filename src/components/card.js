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
            <div className="card" style={{width:this.props.width ?this.props.width : '100%'}} {...this.props}>
                {this.props.children}
            </div>
        )
    }
}

export default card
