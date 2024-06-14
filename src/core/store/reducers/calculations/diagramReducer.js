const initialState = {
    data: null,
    dataLoadingStatus: 'idle',
    errorMessage: null,
};

export const diagramReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DIAGRAM_FETCHING':
            return { ...state, dataLoadingStatus: 'loading', errorMessage: null };

        case 'DIAGRAM_FETCHED':
            return {
                ...state,
                data: action.payload,
                dataLoadingStatus: 'idle',
                errorMessage: null,
            };

        case 'DIAGRAM_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error', errorMessage: '' };

        default:
            return state;
    }
};
