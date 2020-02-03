import * as types from './actionTypes';
import {getUserBlogs} from '../../api/blogApi';

export function loadUserBlogsSuccess(userBlogs){
    return {type: types.LOAD_USER_BLOGS_SUCCESS, userBlogs}
}

export function loadUserBlogs(token, verifyOptions, email){
    return function (dispatch){
        return getUserBlogs(token, verifyOptions, email)
            .then(userBlogs => {
                console.log(userBlogs);
                dispatch(loadUserBlogsSuccess(userBlogs));
            })
            .catch(err => console.log("error obtained in loadUserBlogs"));
    }
}