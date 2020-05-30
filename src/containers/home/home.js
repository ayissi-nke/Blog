import React from 'react'
import './home.css'
import Card from '../../components/card'
import SideBar from '../../components/SideBar';
//import RecentPost from './RecentPost';


 const home = props => {
        const galleryHeigth = 450;
       const galleryStyle = {
            height:galleryHeigth+'px',
            overflow:'hidden'
        }

        const heightImageside = galleryHeigth/3;
        return (
            <div className="">
                <Card >
                    <div className="galleryPost" style={galleryStyle} >
                        <section  className="one" style = {{width:'70%' }}>
                            <div  className="mainimage" >
                                <img   alt="tof" src={require('../../images/anete-lusina-zwsHjakE_iI-unsplash.jpg')}/>
                            </div>
                        </section> 
                        <section className="sideImageWraper" style = {{width:'30%'}}>
                            
                            <div  className="" style={{height:`${heightImageside}px`}}>
                                <img   alt="ifg" src={require('../../images/anete-lusina-zwsHjakE_iI-unsplash.jpg')}/>
                            </div>
                            <div className=""  style={{height:`${heightImageside}px`}}>
                                <img  alt="hg" src={require('../../images/anete-lusina-zwsHjakE_iI-unsplash.jpg')}/>
                            </div>
                            <div className="" style={{height:`${heightImageside}px`}}>
                                <img   alt="ghgf" src={require('../../images/anete-lusina-zwsHjakE_iI-unsplash.jpg')}/>
                            </div>
                           
                        
                        </section>         
                    </div>

                    
                </Card>
               
               
                    <div className="homeContainer" >
                        <div className="first"  style={{width:'70%'}}>
                            <section >
                                <Card>
                                <div className="postimage">
                                    <img   alt="" src={require('../../images/anete-lusina-zwsHjakE_iI-unsplash.jpg')}/>
                                </div>
                                <div className="post" >
                                    <span>  Features </span>   
                                    <h2> FITNESS MANTRA TO LIVE FIT LIVE  </h2>
                                    <span>posted on the 22 mai 2020</span>
                                    <p>Midst first it, you're multiply divided. There don't, second his one given the he one 
                                        third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping.
                                        Abundantly you called signs waters yielding he cattle greater were evening. Sixth make
                                        moving the multiply dominion creature beast made subdue lights him. Green of lights in their first.
                                        It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air 
                                        creature. Green have, tree made. Won't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven
                                        beast won't, herb moveth creepeth. Won't very. 
                                            Blessed replenish. Don't. Likeness fifth may signs called image tree is. </p>
                                    <button>Read More</button>          
                                </div>
                            </Card>  
                            </section> 
                         </div>
                        
                       <SideBar/>
                       
                      
                
                 

            </div>   
                
            </div>
        )
    
}

export default home
