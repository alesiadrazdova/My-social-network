import React from 'react';
import './Post.css'

const Post = (props) => {
    return(             
        <div className='post_item'>
              <img src='https://pbs.twimg.com/profile_images/914408737460367360/D_xX1T9D.jpg' className='avatar'/>
              {(props.name) && `${props.name}, ${props.age} old`}
              <div>
              <div><img src="https://cdn.worldvectorlogo.com/logos/heart.svg" className='like'/><span>{props.likes}</span></div>
                  <div>{props.message}</div>
              </div>
        </div>
             
      
    )

}

export default Post