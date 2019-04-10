
const login = (state = {},action) => {

    switch (action.type) {
        case 'SIGN_IN': {
           const { email, pass } = action.payload;
           return {...state, email, pass };
        }
        default:
            return state;
    }
}

export default login;