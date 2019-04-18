import { SIGN_IN, SET_VALUE_LOGIN } from '../actions';


const loginReducer = (state = {email:'email', pass: ''} ,action) => {

    switch (action.type) {
        case SIGN_IN: {
            
           return state;
        }
        case SET_VALUE_LOGIN: {

            return {...state, [action.payload.name]: action.payload.value};
         }

        default:
            return state;
    }
}

export default loginReducer;