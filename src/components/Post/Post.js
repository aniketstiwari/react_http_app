import React from 'react';
// import { withRouter } from 'react-router-dom';

import './Post.css';

// const post = (props) => {
//     //If you inspect the props you won't see any addtional Link route props. Routing 
//     //related props are not passed down into component tree. We can't access it
//     // which we embed as part of jsx code
//     //If we wanted to use there are 2 ways
//     // First is to pass it as props
//     // Second is to use withRouter HOC
//     console.log(props);

//     return (
//         <article className="Post" onClick={props.clicked}>
//             <h1>{props.title}</h1>
//             <div className="Info">
//                 <div className="Author">{props.author}</div>
//             </div>
//         </article>
//     )
// };
const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

//export default withRouter(post);
export default post;