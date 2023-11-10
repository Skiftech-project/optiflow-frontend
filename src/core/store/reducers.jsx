// reducers.js
const initialState = {
    maxArea: null,
    maxDistance: null,
    angleWidth: null,
    angleHeight: null,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export default rootReducer;
