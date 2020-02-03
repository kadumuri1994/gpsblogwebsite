import * as types from './actionTypes';
import * as blogApi from '../../api/blogApi';

// export function createBlog(blog){
//     return {
//         type: types.CREATE_BLOG,
//         blog
//     }
// }

export function loadAllBlogsSuccess(blogs){
    return {
        type: types.LOAD_ALL_BLOGS_SUCCESS, blogs
    }
}

export function loadTechnologyBlogsSuccess(techBlogs){
    return {
        type: types.LOAD_TECHNOLOGY_BLOGS_SUCCESS, techBlogs
    }
}

export function loadCadBlogsSuccess(cadBlogs){
    return {
        type: types.LOAD_CAD_BLOGS_SUCCESS, cadBlogs
    }
}

export function loadOnCallBlogsSuccess(onCallBlogs){
    return {
        type: types.LOAD_ONCALL_BLOGS_SUCCESS, onCallBlogs
    }
}

export function loadXaltBlogsSuccess(xaltBlogs){
    return {
        type: types.LOAD_XALT_BLOGS_SUCCESS, xaltBlogs
    }
}

export function loadAllBlogs(){
    return function(dispatch){
        return blogApi.getAllBlogs()
            .then(blogs => {
                dispatch(loadAllBlogsSuccess(blogs));
            })
            .catch(err=>{
                throw new Error('error obtained in loadAllBlogs React thunk', err);
            });
    }
}

export function loadTechnologyBlogs(){
    return function(dispatch){
        return blogApi.getTechnologyBlogs()
            .then(techBlogs => {
                dispatch(loadTechnologyBlogsSuccess(techBlogs));
            })
            .catch(err=>{
                throw new Error('error obtained in loadTechnologyBlogs React thunk', err);
            });
    }
}

export function loadCadBlogs(){
    return function(dispatch){
        return blogApi.getCadBlogs()
            .then(cadBlogs => {
                dispatch(loadCadBlogsSuccess(cadBlogs));
            })
            .catch(err=>{
                throw new Error('error obtained in loadCadBlogs React thunk', err);
            });
    }
}

export function loadOnCallBlogs(){
    return function(dispatch){
        return blogApi.getOnCallBlogs()
            .then(onCallBlogs => {
                dispatch(loadOnCallBlogsSuccess(onCallBlogs));
            })
            .catch(err=>{
                throw new Error('error obtained in loadOnCallBlogs React thunk', err);
            });
    }
}

export function loadXaltBlogs(){
    return function(dispatch){
        return blogApi.getXaltBlogs()
            .then(xaltBlogs => {
                dispatch(loadXaltBlogsSuccess(xaltBlogs));
            })
            .catch(err=>{
                throw new Error('error obtained in loadXaltBlogs React thunk', err);
            });
    }
}


// import from './types';

// export function createBlog(){
// }

// export function editBlog(){
// }

// export function likeBlog(){
// }

// export function unlikeBlog(){
// }

// export function commentBlog(){
// }

// export function createBlog(){
// }

// export function createBlog(){
// }

// export function createBlog(){
// }
// const CREATE_BLOG = "CREATE_BLOG";
// const EDIT_BLOG = "EDIT_BLOG";
// const LIKE_BLOG = "LIKE_BLOG";
// const UNLIKE_BLOG = "UNLIKE_BLOG";
// const COMMENT_BLOG = "COMMENT_BLOG";
// const EDIT_COMMENT_BLOG = "EDIT_COMMENT_BLOG";
// const DELETE_COMMENT_BLOG = "DELETE_COMMENT_BLOG";

