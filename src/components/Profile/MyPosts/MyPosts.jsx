import React from 'react';
import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = () => {
    return(         
        <div>My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div>
            <Post name='Lesia' age='38' likes='28' message='Hello! I like this social working'/>
            <Post name='Maxim' age='24' likes='112' message='Hi! My first comment here!'/>          
        </div>        
      </div>
    )

}

export default MyPosts