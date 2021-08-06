import React from 'react';
import './Profile.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return(
      <div>
          <ProfileInfo/>        
          <MyPostsContainer store={props.store} />
      </div>
    )
}

export default Profile;