const initialState = {
    dataLoadingStatus: 'idle',
};

export const saveTemplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_TEMPLATE_FETCHING':
            return { ...state, dataLoadingStatus: 'loading' };

        case 'SAVE_TEMPLATE_FETCHED':
            return {
                ...state,
                dataLoadingStatus: 'idle',
            };

        case 'SAVE_TEMPLATE_FETCHING_ERROR':
            return { ...state, dataLoadingStatus: 'error' };

        default:
            return state;
    }
};
