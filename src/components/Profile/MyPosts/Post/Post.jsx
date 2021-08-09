/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Post.css'

const Post = (props) => {

    return (
        <div className='post-item-wrapper'>
            <div className='post-item'>
                <img src='https://pbs.twimg.com/profile_images/914408737460367360/D_xX1T9D.jpg' className='avatar' />
                {/* {(props.name) && `${props.name}, ${props.age} old`} */}
                <div>
                    <div><img src="https://cdn.worldvectorlogo.com/logos/heart.svg" className='like' /><span>{props.likes}</span></div>
                    <div>{props.message}</div>
                </div>
            </div>
        </div>
    );
};

export default Post;
