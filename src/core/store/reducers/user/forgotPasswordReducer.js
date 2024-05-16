const initialState = {
    dataLoadingStatus: 'idle',
};

export const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORGOT_PASSWORD_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'FORGOT_PASSWORD_FETCHED':
            return {
                ...state,
                dataLoadingStatus: 'idle',
            };

        case 'FORGOT_PASSWORD_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
