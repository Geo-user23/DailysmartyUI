import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

class RecentPosts extends Component {

   componentDidMount() {
      this.props.fetchRecentPosts();
   }
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


export default connect(null, actions)(RecentPosts);
