import React,{useState,useEffect} from 'react'
import './BlogPost.css'
import Card from './card'
import blogPost from './blog.json'

const BogPost =(props) => {
       const [post,setPost]= useState({
        id:1 ,
        blogCategory: "",
        blogTitle: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText:" " ,
       });
        
        
       useEffect(() => {
        
        const postid = props.match.params.postid ;
        console.log(typeof(postid));
        
            const post = blogPost.data.find( record => record.id ==  postid   );
            console.log(post);
        
           setPost(post); 
           
        },[post,props.match.params.postid]);
       
        if(post.blogImage == "") return null;
        return (
            <div  className="blogcontainer">
                <Card >
                    <div className="blogHeader" >
                        <span className="categorie"> {post.blogCategory} </span>
                        <h1 className="postTitle"> {post.blogTitle} </h1>
                        <span className="postedBy"> Posted on {post.postedOn} by {post.author} </span>
                    </div>
                    <div className="postimagecontainer">
            
                        <img className="imageposted" alt="SERACH" src={require(`../images/${post.blogImage}`)}/>

                    </div>
                    <div className="postcontent">
                        <h3>
                            {post.blogTitle}
                        </h3>
                        <p>
                            {post.blogText}
                        </p>
                    </div>
                    
                </Card>

            </div> 
        )
    
}

export default BogPost
