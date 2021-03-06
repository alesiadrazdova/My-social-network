import * as axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfileAC } from '../../redux/profileReducer';
import Profile from './Profile';
class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 18864;
    };

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  };

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  };
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })(withURLDataContainerComponent);
