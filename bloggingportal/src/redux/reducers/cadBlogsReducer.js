import * as types from '../actions/actionTypes';

export default function cadBlogsReducer(state = [], action) {
    switch (action.type) {
        // case types.CREATE_BLOG:
        //     return [...state, ]

        case types.LOAD_CAD_BLOGS_SUCCESS:
            return action.cadBlogs;

        default:
            return state;
    }
}