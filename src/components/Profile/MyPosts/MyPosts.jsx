import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {

let postsElem = props.posts.map( post =>
    <Post message={post.message} likesCount={post.likesCount}/>);

let newPostElem = React.createRef() 

let onAddPost = () => {
    props.addPost();
   }

let onPostChange = () => {
    let text = newPostElem.current.value;
    props.updateNewPostText(text);  
}

    return(         
        <div className='posts-block'>
            <h3>My posts</h3>
        <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElem} value={props.newPostText}/>  
            </div> 
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>           
        </div>
        <div className='posts'>
            {postsElem}         
        </div>        
      </div>
    )

}

export default MyPosts;
