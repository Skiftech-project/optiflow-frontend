const initialState = {
    templates: [],
    templatesLoadingStatus: 'idle',
};

export const getTemplatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TEMPLATES_FETCHING':
            return { ...state, templatesLoadingStatus: 'loading' };

        case 'GET_TEMPLATES_FETCHED':
            return {
                ...state,
                templates: action.payload,
                templatesLoadingStatus: 'idle',
            };

        case 'GET_TEMPLATES_FETCHING_ERROR':
            return { ...state, templatesLoadingStatus: 'error' };

        default:
            return state;
    }
};
