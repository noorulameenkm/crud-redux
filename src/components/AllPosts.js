import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePost from './SinglePost';
import EditPost from './EditPost';

class AllPosts extends Component{


    render(){

        return(
            <div className="allposts">
                <h1>All Posts</h1>
                {
                    this.props.posts.map((post, index) => {
                        return post.editing ? <EditPost post={ post } key={ post.id }/> : 
                                              <SinglePost post={ post } key={ post.id }/>
                })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPosts);