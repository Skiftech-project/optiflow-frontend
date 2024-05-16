export const passwordFetching = () => {
    return {
        type: 'PASSWORD_FETCHING',
    };
};

export const passwordFetched = data => {
    return {
        type: 'PASSWORD_FETCHED',
        payload: data,
    };
};

export const passwordFetchingError = () => {
    return {
        type: 'PASSWORD_FETCHING_ERROR',
    };
};
