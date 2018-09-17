const INITIAl_STATE = '';

export default (state = INITIAl_STATE, action) => {
    console.log(action.payload)
    switch(action.type) {
        case "SEARCH" :
            return action.payload;

        default:
            return state;
    } 
}