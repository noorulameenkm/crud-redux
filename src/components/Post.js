import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from "uuid";

class Post extends Component {

    state = {
        title: '',
        content: ''
    }

    onChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const content = this.state.content;
        const payload = {
            id: uuid(),
            title,
            content
        }
        this.props.dispatch({
            type: 'ADD_POST',
            payload
        });

        this.setState({...this.state, title: '', content: ''});
    }

    render() {
        return(
            <div className="post mt-5">
                <div className="row fixMargin">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
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
                            <button type="submit" className="btn btn-primary">Post</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Post);