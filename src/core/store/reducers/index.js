import { combineReducers } from 'redux';

import { calcReducer } from './calculations';
import { authReducer } from './auth';

const reducer = combineReducers({
    //auth
    auth: authReducer,

    //calc
    calc: calcReducer,
});

export default reducer;
