export const SIGN_IN = 'SIGN_IN';
export const SET_VALUE_LOGIN = 'SET_VALUE_LOGIN';

export const singIn = payload => ({
    type: SIGN_IN,
    payload
});

export const setValueLogin = payload => ({
    type: SET_VALUE_LOGIN,
    payload
});


//handle change of inputs on login
export const onChangeLogin = (event) => {
    const target = event.target;
    //Get the name and value of the input
    const name = target.name;
    const value = target.value;
    const values = { name, value };
    return dispatch => (
        dispatch(setValueLogin(values))
    )
}
