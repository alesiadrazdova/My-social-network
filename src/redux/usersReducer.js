const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS ='SET_USERS';

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://i03.fotocdn.net/s125/271305b5e62d2655/user_xl/2847000225.jpg', followed: false, fullName: 'Oleg', status: 'boss', location: { city: 'Gomel', country: 'Belarus' } },
        // { id: 2, photoUrl: 'https://biografii.net/wp-content/uploads/2018/12/csdjHfG3Ff7m_raian-fillipp.jpg', followed: true, fullName: 'Stas', status: 'boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 3, photoUrl: 'https://i.pinimg.com/736x/93/3d/d5/933dd51d4142af25392d5c5a0af27e79--corporate-portrait-business-portrait.jpg', followed: false, fullName: 'Petro', status: 'boss', location: { city: 'Kiev', country: 'Ukraine' } },
        // { id: 4, photoUrl: 'https://a.d-cd.net/4fa253u-960.jpg', followed: false, fullName: 'David', status: 'boss', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 5, photoUrl: 'https://i.pinimg.com/originals/b9/0c/e1/b90ce175d2e504b560584198a385ad1f.jpg', followed: true, fullName: 'Ivan', status: 'boss', location: { city: 'SPB', country: 'Russia' } },
        // { id: 6, photoUrl: 'https://i.pinimg.com/736x/cd/26/7d/cd267d9afa3343b50c468b3daec610bc--corporate-portrait-business-portrait.jpg', followed: true, fullName: 'Greg', status: 'boss', location: { city: 'Warsaw', country: 'Poland' } },
    ]
}

const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                }
                )
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                }
                )
            };

            case SET_USERS: {
                return {
                    ...state, 
                    users: [ ...state.users, ...action.users ]
                }
            }

        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })



export default usersReduser;