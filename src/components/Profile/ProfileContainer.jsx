import * as axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends Component {

  componentDidMount () {

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((response) => {
            this.props.setUserProfile(response.data);
        });
  }

  render () {
        return(
          <Profile { ...this.props } profile={this.props.profile} />
    )
}
  }

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect (mapStateToProps, { setUserProfile: setUserProfileAC }) (ProfileContainer);