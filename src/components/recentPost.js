import React, { Component } from "react";

class RecentPost extends Component {
   render(){
    return(
        <div className="recet-posts">
         <div className="recent-post-wrapper">
         <div className="recent-posts__heading">Recent Posts </div>
           <ul className="recent-posts__posts">
               <li>reent post 0</li>
               <li>recent post 1</li>
               <li>recent post 2</li>
            </ul>
           
         
         </div>
        </div>
    )
   }
}


export default RecentPost;