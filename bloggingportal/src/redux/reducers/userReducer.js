import * as types from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case types.SIGN_IN:
            return action.user;
        case types.SIGN_OUT:
            return {};
        default:
            return state;            
    }
}