import React, { Component } from "react";
import axiosinstance from '../../../axios';
import Post from '../../../components/Post/Post';
// import { Link } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        //whenever we add Link route it will pass additional props
        console.log(this.props);

        //the below "get" line we be executed asynchronously that's why we can't save
        // in a variable as it is not going to complete immediately

        //then() function will execute when the get request will be completed
        axiosinstance.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map( post => {
                return {
                    ...post, 
                    author: 'Max'
                }
            })
            //console.log(response);
            this.setState({ posts: updatedPosts });
        })
        .catch(error => {
            //console.log(error);
            //this.setState({error: true})
        });
        //calling setState() outside of the get function will not set the state
        // because we won't get the whole response as get is a Async request

    }

    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id})

        //when we want to navigate after http request is finish
        this.props.history.push({pathname: '/' + id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map( (post) => {
                {/* <Link to={'/posts/' + post.id} key={post.id}> */}
                return (
                  //<Link to={'/' + post.id} key={post.id}> 
                    <Post
                    key={post.id}
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                  //</Link>
                )
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;