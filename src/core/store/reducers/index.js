import { combineReducers } from 'redux';

import { authReducer, loginReducer, logoutReducer, signupReducer } from './auth';
import { calcReducer } from './calculations';
import { passwordReducer } from './user';
import { userDataReducer } from './user';
import { forgotPasswordReducer } from './user/forgotPasswordReducer';
import { restorePasswordReducer } from './user/restorePasswordReducer';

const reducer = combineReducers({
    //auth
    login: loginReducer,
    logout: logoutReducer,
    signup: signupReducer,
    auth: authReducer,

    //userData
    userData: userDataReducer,

    //calc
    calc: calcReducer,

    //password
    password: passwordReducer,

    //forgotPassword
    forgotPassword: forgotPasswordReducer,

    //restorePassword
    restorePassword: restorePasswordReducer,
});

export default reducer;
