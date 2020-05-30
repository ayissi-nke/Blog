import React,{useState,useEffect} from 'react'
import './SideBar.css'
import Card from './card'
import blogPost from './blog.json'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

 const SideBar =(props) => {
    

    const [posts,setPosts]= useState([]);
        

    useEffect(() => {
     
     
     
         const posts = blogPost.data;
         console.log(posts);
     
        setPosts(posts); 
        
     },[posts]);

        return (
            <div className="sidebarcontainer">
                <Card  style={{marginBottom:'20px'}}>
                    <div className="cardheader">
                        <span>ABOUT US</span>
                        
                    </div>  
                    <div className="profileimage">
                         <img className="" alt="SERACH" src={require('../images/FB_IMG_15880514605247485.jpg')}/>   
                    </div>
                    <div className="biographie">
                        <p>My name is AYISSI NKE , am a software developer .Currently am enjoiying the reactjs technology now that so intresting.</p>
                    </div>
                   
                </Card>
                <Card   style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                    <div className="cardheader">
                        <span>SOCIAL NETWORKS</span>
                    </div>

                </Card >
                    
                <Card>
                    <div className="sidebarpost">
                        <span className="title">RECENT POST</span>    
                        <div className="recentposts">

                            {   posts.map(post =>{
                                    return(
                                        <NavLink key={post.id} to={`/post/${post.id}`}> 
                                            <div className="recentpost">
                                                <h3> {post.blogTitle} </h3>
                                                <span> {post.postedOn} </span>
                                            </div>
                                        </NavLink>
                                        
                                    );
                                })
                            }

                        </div>      
                    </div> 
                </Card>
            </div>      
            
        )
    
}

export default SideBar
