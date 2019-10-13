import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">CRUD REDUX</Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">New Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/posts">All Posts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
