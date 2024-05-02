export const logoutFetching = () => {
    return {
        type: 'LOGOUT_FETCHING',
    };
};

export const logoutFetched = data => {
    return {
        type: 'LOGOUT_FETCHED',
        payload: data,
    };
};

export const logoutFetchingError = () => {
    return {
        type: 'LOGOUT_FETCHING_ERROR',
    };
};
