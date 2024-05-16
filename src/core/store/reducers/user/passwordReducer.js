const initialState = {
    dataLoadingStatus: 'idle',
};

export const passwordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PASSWORD_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'PASSWORD_FETCHED':
            return {
                ...state,
                dataLoadingStatus: 'idle',
            };

        case 'PASSWORD_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
