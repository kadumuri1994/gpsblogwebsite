import * as types from './actionTypes';
import {} from '../../api/blogApi';

export function signIn({name, email, token, verifyOptions}) {
    return {type: types.SIGN_IN, user: {name, email, token, verifyOptions}}
}

export function signOut() {
    return {type: types.SIGN_OUT, user: {}}
}
