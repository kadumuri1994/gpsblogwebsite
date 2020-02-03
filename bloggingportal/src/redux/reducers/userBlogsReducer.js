import * as types from '../actions/actionTypes';

export default function userReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_USER_BLOGS_SUCCESS:
                return action.userBlogs;
        default:
            return state;            
    }
} 