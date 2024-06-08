export const getTemplatesFetching = () => {
    return {
        type: 'GET_TEMPLATES_FETCHING',
    };
};

export const getTemplatesFetched = data => {
    return {
        type: 'GET_TEMPLATES_FETCHED',
        payload: data,
    };
};

export const getTemplatesFetchingError = () => {
    return {
        type: 'GET_TEMPLATES_FETCHING_ERROR',
    };
};
