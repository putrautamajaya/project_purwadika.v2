import { combineReducers } from 'redux';
import loginAuthentication from './loginAuthentication';
import CartFunction from './cartFunction';
import SearchFunction from './searchFunction';

export default combineReducers(
    
    {
        userLogin: loginAuthentication,
        addCart: CartFunction,
        search: SearchFunction
    }
    
);