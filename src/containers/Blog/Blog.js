import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount() {
        //the below "get" line we be executed asynchronously that's why we can't save
        // in a variable as it is not going to complete immediately

        //then() function will execute when the get request will be completed
        axios.get('/posts')
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
            this.setState({error: true})
        });
        //calling setState() outside of the get function will not set the state
        // because we won't get the whole response as get is a Async request

    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map( (post) => {
                return <Post 
                  key={post.id} 
                  title={post.title} 
                  author={post.author}
                  clicked={() => this.postSelectedHandler(post.id)} />
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;