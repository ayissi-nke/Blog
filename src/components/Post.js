import React, { Component } from 'react'
import './post.css'
import BogPost from './BogPost'
import SideBar from './SideBar'

export class Post extends Component {
    render() {

        //console.log(this.props);
        return (
            <section className="container">
                <BogPost {...this.props}/>
                <SideBar/>

            
            </section>
        )
    }
}

export default Post
