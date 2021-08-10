import { Button, Divider } from '@material-ui/core';
import React from 'react';
import './Users.css';
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

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
                                    <Button disabled={props.followingInProgress.some(id => id === user.id)} variant='contained' color='inherit' style={{ width: 110 }}
                                        onClick={() => { props.unfollowed(user.id) }}>Unfollow</Button>
                                    : <Button disabled={props.followingInProgress.some(id => id === user.id)} variant='contained' color='primary' style={{ width: 110 }}
                                        onClick={() => { props.followed(user.id) }}>Follow</Button>}
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
