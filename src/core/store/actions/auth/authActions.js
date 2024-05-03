export const authFetching = () => {
    return {
        type: 'AUTH_FETCHING',
    };
};

export const authFetched = data => {
    return {
        type: 'AUTH_FETCHED',
        payload: data,
    };
};

export const authFetchingError = () => {
    return {
        type: 'AUTH_FETCHING_ERROR',
    };
};
