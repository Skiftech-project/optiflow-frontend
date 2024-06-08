const initialState = {
    dataLoadingStatus: 'idle',
};

export const deleteTemplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TEMPLATE_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'DELETE_TEMPLATE_FETCHED':
            return {
                ...state,
                dataLoadingStatus: 'idle',
            };

        case 'DELETE_TEMPLATE_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
