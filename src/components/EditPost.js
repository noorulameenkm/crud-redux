import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditPost extends Component {


    state = {
        id: '',
        title: '',
        content: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const id = this.state.id;
        const title = this.state.title;
        const content = this.state.content;
        const post = {
            title,
            content
        };

        this.props.dispatch({
            type: 'UPDATE_POST',
            payload: {
                id,
                post
            }
        });
    }

    onChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount = () => {
        const { post } = this.props;
        this.setState({
            ...this.state,
            id: post.id,
            title: post.title,
            content: post.content
        })
    }

    render(){

        return(
            <div className="card">
                <div className="card-body">
                    {/* <h5 className="card-title">{ post.title }</h5>
                    
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
                    </button> */}
                    <form className="post-form" onSubmit={ this.onSubmit }>
                        <div className="form-group">
                            <label htmlFor="postTitle">Post Title</label>
                            <input type="text" name="title" value={ this.state.title } 
                                id="postTitle" className="form-control" 
                                placeholder="Post Title" required
                                onChange= { this.onChange }
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postText">Post Content</label>
                            <textarea id="postText" name="content" 
                                    value={ this.state.content } cols="30" rows="10" 
                                    className="form-control"
                                    onChange= { this.onChange }
                                    ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(EditPost);