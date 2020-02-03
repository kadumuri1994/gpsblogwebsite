import * as types from '../actions/actionTypes';

export default function onCallBlogsReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_BLOG:
            // return

        case types.LOAD_ONCALL_BLOGS_SUCCESS:
            return action.onCallBlogs;

        default:
            return state;
    }
}