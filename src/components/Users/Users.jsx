import { Button, Divider } from '@material-ui/core';
import * as axios from 'axios';
import React, { Component } from 'react';
import './Users.css';
import userPhoto from '../../assets/images/avatar.png';

class Users extends Component {

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    };

    pageChangeHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.setUsers(response.data.items);
        })
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let pagesPagination = pages.map((p) => {
            return <span onClick={() => { this.pageChangeHandler(p) }} key={this.props.id} className={this.props.currentPage === p ? 'bold' : undefined }>{p}</span>
        })


        return (
            <div className='users-wrapper'>
                <div className='pagination-wrapper'>
                    {pagesPagination}
                </div>
                {this.props.users.map((user) =>
                    <div key={user.id} className='user'>
                        <div className='user-data'>
                            <div>
                                <div>
                                    <img src={user.photos.small === null ? userPhoto : user.photos.small} alt='user'
                                        className='users-photo' />
                                </div>
                                <div>
                                    {user.followed ?
                                        <Button variant="contained" style={{ width: 110 }} color="inherit"
                                            onClick={() => { this.props.unfollow(user.id) }}>Unfollow</Button>
                                        : <Button Button variant="contained" style={{ background: '#0a37aa', color: '#ffffff', width: 110 }}
                                            onClick={() => { this.props.follow(user.id) }}>Follow</Button>}
                                </div>
                            </div>
                        </div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        {/* <div>{user.location.city}, {user.location.country}</div> */}

                        <Divider style={{ listStyleType: 'none', margin: 10 }} variant="middle" component="li" />
                    </div>)
                }
                <div className='pagination-wrapper'>
                    {pagesPagination}
                </div>
            </div>
        );
    }

};

export default Users;
