import * as types from '../actions/actionTypes';

export default function allBlogsReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_ALL_BLOGS_SUCCESS:
            return action.blogs;

        default:
            return state;
    }
}