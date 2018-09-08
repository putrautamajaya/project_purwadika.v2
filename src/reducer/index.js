import { combineReducers } from 'redux';
import loginAuthentication from './loginAuthentication';
import CartFunction from './cartFunction';

export default combineReducers(
    
    {
        userLogin: loginAuthentication,
        addCart: CartFunction
    }
    
);