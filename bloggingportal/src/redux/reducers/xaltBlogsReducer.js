import * as types from '../actions/actionTypes';

export default function xaltBlogsReducer(state = [], action) {
    switch (action.type) {
        // case types.CREATE_BLOG:
        //     return

        case types.LOAD_XALT_BLOGS_SUCCESS:
            return action.xaltBlogs;

        default:
            return state;
    }
}