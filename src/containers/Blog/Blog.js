import React, { Component } from 'react';
//import axios from 'axios';
// import axiosinstance from '../../axios';

// If we want to add active class to our link we need to replace Link with NavLink
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    state = {
        auth: false
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/** Link will create an anchor tag and will prevent the
                             * default behvaiour of sending a new request
                             */}
                             {/** Now first change the lable from Home to Posts. WHen
                              * we go to Posts page the posts link is highlighted but 
                              * when we go to single post page the posts link is not
                              * highlighted. The reason is because we are doing exact
                              * match on the Navlink. Path we are match is "/" but in single
                              * post path it will be localhost:3000/some_id that's
                              * why it doesn't match
                              * Now if we remove exact then New Post
                              * will get highlighted. So, this edge case we can ignore
                              */}
                            <li><NavLink 
                               to="/posts/" 
                               exact
                               activeClassName="my-active"
                               activeStyle={{
                                   color: '#fa923f',
                                   textDecoration: 'underline'
                               }}>Posts</NavLink></li>
                            {/** hash: property will allow us to then jump to any
                             * id element we specified
                             */}
                            {/** Absolute path is always appended to your domain
                              *  Let's say we have a website example.com. Then when
                              * we navigate to new-post it will append to the
                              * base URL. In React it is always treated as absolute
                              * path. If you want to change it to relative path with
                              * the help of this.props.match.url 
                              * pathname: this.props.match.url + "new-post" */}
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true' 
                            }}>New Post</NavLink></li>
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
                 <Switch>
                   { this.state.auth ? <Route path="/new-post" component={NewPost} /> : null }
                   {/* <Route path="/" component={Posts} /> */}
                   <Route path="/posts" component={Posts} />
                   {/** If we use outside the "Switch" route then 
                    * "from" cannot be specified. Only "to" will be available
                    * outside "Switch" */}
                   {/* <Redirect from="/" to="/posts" /> */}
                   {/* <Route path="/" component={Posts} /> */}

                   {/**How to handle 404. Once way is using "Redirect". The other way 
                    * using Route by not specififying "path"
                    */}
                    <Route render={() => <h1>Not Found</h1>} />
                 </Switch>
                {/** Position of route is important as it parses from top to bottom */}
                {/** THe id post was getting render in new post path because :id part
                 * here will also interpret new-post. Inorder to solve this issue by
                 * adding a prefix in :id. The other way to solve this problem is
                 * to make use of Switch route. Which tell the router to match the
                 * first prefix
                 */}
                {/* <Route path="/posts/:id" exact component={FullPost} /> */}
            </div>
        );
    }
}

//Guard is used when you don't know whether the user is authenticated or not. Or some
//parts in your application which you only want to allow users to visit if he is authenticated

export default Blog;