import { combineReducers } from 'redux';
//import blogs from './blogsReducer';
import userData from './userReducer';
import allBlogsData from './allBlogsReducer';
import techBlogsData from './techBlogsReducer';
import cadBlogsData from './cadBlogsReducer';
import onCallBlogsData from './onCallBlogsReducer';
import xaltBlogsData from './xaltBlogsReducer';
import userBlogsData from './userBlogsReducer';

const rootReducer = combineReducers({
    userData,
    userBlogsData,
    allBlogsData,
    techBlogsData,
    cadBlogsData,
    onCallBlogsData,
    xaltBlogsData
});

export default rootReducer;