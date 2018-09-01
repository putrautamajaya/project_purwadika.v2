const INITIAl_STATE = { username: "", email: "", error: "", cookieCheck: false};

export default (state = INITIAl_STATE, action) => {
    switch(action.type) {
        case "USER_LOGIN_SUCCESS" :
            return action.payload;

        case "USER_LOGIN_FAIL" :
            return {...state, error: "Authentication Error"};

        case "USER_LOGOUT" :
            return INITIAl_STATE;
        
        case "COOKIE_CHECKED" :
            return {...state, cookieCheck: true};

        default:
            return state;
    } 
}