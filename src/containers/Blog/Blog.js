import React, { Component } from 'react';
//import axios from 'axios';
// import axiosinstance from '../../axios';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/** Link will create an anchor tag and will prevent the
                             * default behvaiour of sending a new request
                             */}
                            <li><Link to="/">Home</Link></li>
                            {/** hash: property will allow us to then jump to any
                             * id element we specified
                             */}
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true' 
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/** Route needs some configuration like path property */}
                {/** Render holds a reference to a function. We can even add anonymous
                 * function */}
                 {/** Right it match the prefix from the path that's why we see
                  * <h1>Home</h1> in both the url. We can override this behavior by using
                  * exact prop. exact prop is a boolean prop */}
                {/* <Route path="/" exact render={ () => <h1>Home</h1> } /> */}
                {/** We can use as many routes on the same page */}
                {/* <Route path="/" exact render={ () => <h1>Home 2</h1> } /> */}

                {/**There is a issue here whenever we are clicking on any click
                 * we are reloading the page which will load the whole dom we will lose
                 * state. Instead we need to render the components whenever user clicks
                 * on any link
                 */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;