import * as types from '../actions/actionTypes';

export default function techBlogsReducer(state = [], action) {
    switch (action.type) {
        // case types.CREATE_BLOG:
        //     return

        case types.LOAD_TECHNOLOGY_BLOGS_SUCCESS:
            return action.techBlogs;

        default:
            return state;
    }
}