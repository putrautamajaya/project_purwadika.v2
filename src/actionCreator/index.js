import axios from 'axios';
import { API_URL_1 } from '../support/API_url';

export const onLogin = (user) => {
    return(dispatch) => {
        console.log("onlogin di jalankan")
        axios.get(API_URL_1 + '/users', { 
            params: {
                email: user.email,
                password: user.password
            }

        }).then(user => {
            console.log(user);
            dispatch ({
                type: "USER_LOGIN_SUCCESS",
                payload:{
                    username: user.data[0].username,
                    email: user.data[0].email,
                    error: "",
                    cookieCheck: false
                } 
            });
    
        }).catch( err => {
            console.log(err);
            dispatch ({
                type: "USER_LOGIN_FAIL"
            });
            
        })
    }
};

export const onLogOut = () => {
    return {type: "USER_LOGOUT"};
};

export const keepLogin = (email) => {
    return(dispatch) => {

        axios.get(API_URL_1 + '/users', { 
            params: {
                email: email,
            }
        }).then( user => {
            console.log(user);
            dispatch ({
                type: "USER_LOGIN_SUCCESS",
                payload:{
                    username: user.data[0].username,
                    email: user.data[0].email,
                    error: "",  
                } 
            });
            dispatch ({
                type: "COOKIE_CHECKED",
            });
            
        }).catch( err => {
            console.log(err);
            dispatch ({
                type: "USER_LOGIN_FAIL"
            });
            
        })
    }
};

export const cookieCheck = () => {
    return {type: "COOKIE_CHECKED"};
};