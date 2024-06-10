export const saveTemplateFetching = () => {
    return {
        type: 'SAVE_TEMPLATE_FETCHING',
    };
};

export const saveTemplateFetched = data => {
    return {
        type: 'SAVE_TEMPLATE_FETCHED',
        payload: data,
    };
};

export const saveTemplateFetchingError = () => {
    return {
        type: 'SAVE_TEMPLATE_FETCHING_ERROR',
    };
};
