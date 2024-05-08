import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { calcReducer } from './calculations';

const reducer = combineReducers({
    //auth
    auth: authReducer,

    //calc
    calc: calcReducer,
});

export default reducer;
