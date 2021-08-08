import React from 'react';
import { Preloader } from '../../common/preloader/preloader';
import './ProfileInfo.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
    return(
        <div>
          <div >
            <img src='https://i.pinimg.com/originals/b1/9b/6b/b19b6bb72efe419870feea4bf10e84d0.jpg' alt='' className='banner'/>
          </div>
        <div className='description-block'>
          <img className='user-avatar' alt='avaUser' src={props.profile.photos.large} />
          AVA + description</div>
        </div>
    )

}

export default ProfileInfo