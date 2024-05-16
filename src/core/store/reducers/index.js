import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { calcReducer } from './calculations';
import { passwordReducer } from './user';
import { userDataReducer } from './user';
import { forgotPasswordReducer } from './user/forgotPasswordReducer';

const reducer = combineReducers({
    //auth
    auth: authReducer,

    //calc
    calc: calcReducer,

    //userData
    userData: userDataReducer,

    //password
    password: passwordReducer,

    //forgotPassword
    forgotPassword: forgotPasswordReducer,
});

export default reducer;
