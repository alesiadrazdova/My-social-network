import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import axios from 'axios';
import { Preloader } from '../common/preloader/preloader';
class UsersContainer extends Component {

    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    pageChangeHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : <Users
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    pageChangeHandler={this.pageChangeHandler} />}
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
        isFetching: state.usersPage.isFetching
    };
};

export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setUsersTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC,
})(UsersContainer);
