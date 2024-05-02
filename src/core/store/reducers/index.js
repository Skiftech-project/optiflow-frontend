import { combineReducers } from 'redux';

import { calcReducer } from './calculations';
import { loginReducer, logoutReducer, signupReducer } from './auth';

const reducer = combineReducers({
    //auth
    login: loginReducer,
    logout: logoutReducer,
    signup: signupReducer,

    //calc
    calc: calcReducer,
});

export default reducer;
