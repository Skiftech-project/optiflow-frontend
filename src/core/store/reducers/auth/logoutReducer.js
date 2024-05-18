const initialState = {
    dataLoadingStatus: 'idle',
};

export const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGOUT_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'LOGOUT_FETCHED':
            return {
                ...state,
                dataLoadingStatus: 'idle',
            };

        case 'LOGOUT_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
