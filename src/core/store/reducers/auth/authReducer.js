const initialState = {
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                isAuth: action.payload,
            };

        default:
            return state;
    }
};
