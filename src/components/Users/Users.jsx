import { Button, Divider } from '@material-ui/core';
import React from 'react';
import './Users.css';
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= 25; i++) {
        pages.push(i);
    }

    let pagesPagination = pages.map((p, id) => {
        return <span onClick={() => { props.pageChangeHandler(p) }} key={`P + ${id}`} className={props.currentPage === p ? 'bold' : undefined}>{p}</span>
    })

    return (
        <div className='users-wrapper'>
            <div className='pagination-wrapper'>
                {pagesPagination}
            </div>
            {props.users.map((user) =>
                <div key={user.id} className='user'>
                    <div className='user-data'>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <div>
                                    <img src={user.photos.small === null ? userPhoto : user.photos.small} alt='user'
                                        className='users-photo' />
                                </div>
                            </NavLink>
                            <div>
                                {user.followed ?
                                    <Button variant='contained' color='inherit' style={{ width: 110 }}
                                        onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                withCredentials: true,
                                                headers: { 'API-KEY': '3ca9781b-9298-496d-82f4-e13184811f7e' }
                                            })
                                                .then((response) => {
                                                    if (response.data.resultCode === 0) {
                                                    props.unfollow(user.id);
                                                    }
                                                });
                                        }}>Unfollow</Button>
                                    : <Button variant='contained' color='primary' style={{ width: 110 }}
                                        onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                withCredentials: true,
                                                headers: { 'API-KEY': '3ca9781b-9298-496d-82f4-e13184811f7e' }
                                            })
                                                .then((response) => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(user.id);
                                                    }                                                  
                                                });
                                        }}>Follow</Button>}
                            </div>
                        </div>
                    </div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <Divider style={{ listStyleType: 'none', margin: 10 }} variant="middle" component="li" />
                </div>)
            }
            <div className='pagination-wrapper'>
                {pagesPagination}
            </div>
        </div>
    );
}

export default Users;
