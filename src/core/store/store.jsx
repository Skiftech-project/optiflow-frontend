// store.js

import { createStore, combineReducers } from 'redux';

const initialState = {
    maxArea: null,
    maxDistance: null,
    angleWidth: null,
    angleHeight: null,
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    data: dataReducer,
});

const store = createStore(rootReducer);

export default store;
