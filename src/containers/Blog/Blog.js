import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    componentDidMount() {
        //the below "get" line we be executed asynchronously that's why we can't save
        // in a variable as it is not going to complete immediately

        //then() function will execute when the get request will be completed
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response);
        });

    }

    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
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