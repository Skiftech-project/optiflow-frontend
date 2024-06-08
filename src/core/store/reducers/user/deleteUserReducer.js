const initialState = {
    dataLoadingStatus: 'idle',
};

export const deleteUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_USER_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'DELETE_USER_FETCHED':
            return {
                ...state,
                dataLoadingStatus: 'idle',
            };

        case 'DELETE_USER_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
