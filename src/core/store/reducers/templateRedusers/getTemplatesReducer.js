const initialState = {
    templates: [],
    templatesLoadingStatus: 'idle',
    errorMessage: null,
};

export const getTemplatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TEMPLATES_FETCHING':
            return { ...state, templatesLoadingStatus: 'loading', errorMessage: null };

        case 'GET_TEMPLATES_FETCHED':
            return {
                ...state,
                templates: action.payload,
                templatesLoadingStatus: 'idle',
                errorMessage: null,
            };

        case 'GET_TEMPLATES_FETCHING_ERROR':
            return {
                ...state,
                templatesLoadingStatus: 'error',
                errorMessage: 'На жаль збережених шаблонів ще немає.',
            };

        default:
            return state;
    }
};
