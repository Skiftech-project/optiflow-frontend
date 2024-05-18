const initialState = {
    dataLoadingStatus: 'idle',
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'LOGIN_FETCHED':
            return {
                ...state,
                dataLoadingStatus: 'idle',
            };

        case 'LOGIN_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
