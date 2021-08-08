import { Button } from '@material-ui/core';
import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElem = props.posts.map(post =>
        <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

    let newPostElem = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className='posts-block'>
            <h3 className='txt-post'>My posts</h3>
            <div>
                <div>
                    <textarea className='txt-area-my-posts' onChange={onPostChange} ref={newPostElem} value={props.newPostText} />
                </div>
                <Button variant="contained" color='primary' className='btn-txt-my-posts' onClick={onAddPost}>Add post</Button>
            </div>
            <div className='posts'>
                {postsElem}
            </div>
        </div>
    )

}

export default MyPosts;
