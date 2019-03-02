 import React, { Component } from 'react';
 class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({posts:data}))
    }
     render() { 
        const postItems = this.state.posts.map(post =>(
            <div key ={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))
         return (  
             <div>
                <h1>Post</h1>
                <hr />
                {postItems}
             </div>
         );
     }
 }
  
 export default Post;