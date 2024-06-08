export const deleteTemplateFetching = () => {
    return {
        type: 'DELETE_TEMPLATE_FETCHING',
    };
};

export const deleteTemplateFetched = data => {
    return {
        type: 'DELETE_TEMPLATE_FETCHED',
        payload: data,
    };
};

export const deleteTemplateFetchingError = () => {
    return {
        type: 'DELETE_TEMPLATE_FETCHING_ERROR',
    };
};
