import React, { Component } from 'react';
import Post from './components/Post';
import AllPost from './components/AllPosts';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Store
import store from './store';
import { Provider } from 'react-redux';

class App extends Component{

  render(){
    return(
      <Provider store={ store }>
        <Router>
          <div className="App container">
            <Navbar />
            <Switch>
              <Route exact path='/' component={ Post } />
              <Route path='/posts' component={ AllPost } />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
