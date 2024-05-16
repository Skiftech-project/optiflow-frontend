const initialState = {
    dataLoadingStatus: 'idle',
};

export const restorePasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESTORE_PASSWORD_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'RESTORE_PASSWORD_FETCHED':
            return {
                ...state,
                dataLoadingStatus: 'idle',
            };

        case 'RESTORE_PASSWORD_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
