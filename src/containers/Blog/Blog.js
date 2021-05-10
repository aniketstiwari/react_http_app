import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        //the below "get" line we be executed asynchronously that's why we can't save
        // in a variable as it is not going to complete immediately

        //then() function will execute when the get request will be completed
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response);
            this.setState({ posts: response.data });
        });
        //calling setState() outside of the get function will not set the state
        // because we won't get the whole response as get is a Async request

    }

    render () {
        const posts = this.state.posts.map( (post) => {
            return <Post key={post.id} title={post.title} />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;