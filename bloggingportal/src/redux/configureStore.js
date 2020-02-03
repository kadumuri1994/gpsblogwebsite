import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; // this is useful if we mistakenly mutate state in store
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; //add support for Redux dev tools
    return createStore(
        rootReducer, 
        initialState, 
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())
    ));
}