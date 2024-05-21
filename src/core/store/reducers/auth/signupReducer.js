const initialState = {
    dataLoadingStatus: 'idle',
};

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'SIGNUP_FETCHED':
            return {
                ...state,
                dataLoadingStatus: 'idle',
            };

        case 'SIGNUP_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
