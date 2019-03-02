import React, { Component } from 'react';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <PostForm />
        <Post />
      </div>
    );
  }
}

export default App;
