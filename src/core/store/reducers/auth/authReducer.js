const initialState = {
    data: null,
    dataLoadingStatus: 'idle',
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'AUTH_FETCHED':
            return {
                ...state,
                data: action.payload,
                dataLoadingStatus: 'idle',
            };

        case 'AUTH_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
