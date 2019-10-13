import React, { Component } from 'react';
import { connect } from 'react-redux';

class SinglePost extends Component {

    deletePost = (id) => {
        this.props.dispatch({
            type: 'DELETE_POST',
            payload: id
        });
    }

    editPost = (id) => {
        this.props.dispatch({
            type: 'EDIT_POST',
            payload: id
        });
    }


    render(){

        const { post } = this.props;

        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ post.title }</h5>
                    <p className="card-text">
                        { post.content }
                    </p>
                    <button className="card-link btn btn-danger"
                            onClick={ () => this.deletePost(post.id) }
                    >
                        Delete
                    </button>
                    <button className="card-link btn btn-primary"
                    onClick={ () => this.editPost(post.id) }
                    >
                        Edit
                    </button>
                </div>
            </div>
        )
    }

}

export default connect()(SinglePost);