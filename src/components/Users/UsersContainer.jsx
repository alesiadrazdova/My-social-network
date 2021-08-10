import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/usersReducer';
import { Preloader } from '../common/preloader/preloader';
class UsersContainer extends Component {

    componentDidMount = () => {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    pageChangeHandler = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null } <Users
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    pageChangeHandler={this.pageChangeHandler} />
            </>
        );
    };
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);
