
import React from 'react'
import './RecentPost.css'
import Card from '../../components/card'

const RecentPost = props => {
    return (
        <div>
             <div style={{width:'70%'}}>
                        <Card  style={{marginBottom:'20px 0'}} >
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
                        <Card  style={{margin:'20px 0'}}>
                            card deux
                        </Card>
                 </div>

        </div>
    )
}

export default RecentPost
