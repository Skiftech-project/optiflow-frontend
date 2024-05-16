import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { calcReducer } from './calculations';
import { passwordReducer } from './user';

const reducer = combineReducers({
    //auth
    auth: authReducer,

    //calc
    calc: calcReducer,

    //password
    password: passwordReducer,
});

export default reducer;
