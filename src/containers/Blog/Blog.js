import React, { Component } from 'react';
//import axios from 'axios';
// import axiosinstance from '../../axios';
import { Route } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/** Route needs some configuration like path property */}
                {/** Render holds a reference to a function. We can even add anonymous
                 * function */}
                 {/** Right it match the prefix from the path that's why we see
                  * <h1>Home</h1> in both the url. We can override this behavior by using
                  * exact prop. exact prop is a boolean prop */}
                <Route path="/" exact render={ () => <h1>Home</h1> } />
                {/** We can use as many routes on the same page */}
                <Route path="/" exact render={ () => <h1>Home 2</h1> } />
            </div>
        );
    }
}

export default Blog;