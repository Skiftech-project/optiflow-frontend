const initialState = {
    data: null,
    dataLoadingStatus: 'idle',
};

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERDATA_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'USERDATA_FETCHED':
            return {
                ...state,
                data: action.payload,
                dataLoadingStatus: 'idle',
            };

        case 'USERDATA_FETCHING_ERROR':
            return {
                ...state,
                dataLoadingStatus: 'error',
            };

        default:
            return state;
    }
};
