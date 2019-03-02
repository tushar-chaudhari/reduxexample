import React, { Component } from 'react';
class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        }
    }
    // writing same function for state change
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value}) 
    }
    render() { 
        return ( 
            <div>
                <h1>Add Post</h1>
                <hr/>
                <form>
                    <div>
                        <label>Title :</label>
                        <br />
                        <input type='text' name='title' onChange = {this.onChange} value = {this.state.title}/>
                    </div>
                    <br />
                    <div>
                        <label>Body :</label>
                        <br />
                        <input type='textarea' name='body' onChange = {this.onChange} value = {this.state.body}/>
                    </div>
                    <br />
                    <input type='submit' value='Submit' />
                </form>
            </div>
         );
    }
}
 
export default PostForm;