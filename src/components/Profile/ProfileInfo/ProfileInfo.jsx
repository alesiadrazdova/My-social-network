import React from 'react';
import { Preloader } from '../../common/preloader/preloader';
import userPhoto from '../../../assets/images/avatar.png';
import vk from '../../../assets/svg/vk.svg';
import facebook from '../../../assets/svg/facebook.svg';
import instagram from '../../../assets/svg/instagram.svg';
import website from '../../../assets/svg/website.svg';
import twitter from '../../../assets/svg/twitter.svg';
import linkedin from '../../../assets/svg/linkedin.svg';
import jobSearch from '../../../assets/svg/job-search.svg';
import './ProfileInfo.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className='profile-info-wrapper'>
      <div>
        <img src='https://i.pinimg.com/originals/b1/9b/6b/b19b6bb72efe419870feea4bf10e84d0.jpg' alt='' className='banner' />
      </div>
      <div className='description-user-block'>
        <div>
          <img className='user-avatar' alt='avaUser' src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large} />
        </div>
        <div className='description-block'>
          <div className='full-name'>{props.profile.fullName}</div>
          <div className={props.profile.aboutMe === null ? 'status-user' : undefined}>{props.profile.aboutMe === null ? 'Set status' : props.profile.aboutMe}</div>
          <div>
            <span>
              {props.profile.contacts.vk ? <a href={props.profile.contacts.vk} target="blank"><img src={vk} alt='vk' className='social' /></a> : null}
            </span>
            <span>
              {props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook} target="blank"><img src={facebook} alt='fb' className='social' /></a> : null}
            </span>
            <span>
              {props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram} target="blank"><img src={instagram} alt='insta' className='social' /></a> : null}
            </span>
            <span>
              {props.profile.contacts.linkedin ? <a href={props.profile.contacts.linkedin} target="blank"><img src={linkedin} alt='in' className='social' /></a> : null}
            </span>
            <span>
              {props.profile.contacts.website ? <a href={props.profile.contacts.website} target="blank"><img src={website} alt='website' className='social' /></a> : null}
            </span>
            <span>
              {props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter} target="blank"><img src={twitter} alt='twitter' className='social' /></a> : null}
            </span>
          </div>
          <>
            {props.profile.lookingForAJob ?
              <div className='search-job'>
                <div><img src={jobSearch} style={{ width: 30, padding: 6 }} alt='job' /> </div>
                <div>{props.profile.lookingForAJobDescription}</div>
              </div> : null}
          </>
        </div>
        AVA + description
      </div>
    </div>
  )

}

export default ProfileInfo