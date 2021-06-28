import React from 'react';
import './Profile.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return(
        <div>
        <div>
          <img src='https://phonoteka.org/uploads/posts/2021-04/1619669701_7-phonoteka_org-p-krasivii-fon-dlya-vistavki-8.jpg' alt='' className='banner'/>
          </div>
        <div>AVA + description</div>
        <div>
          <MyPosts/>
        </div>       
      </div>
    )
}

export default Profile