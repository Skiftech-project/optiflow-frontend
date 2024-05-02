export const loginFetching = () => {
    return {
        type: 'LOGIN_FETCHING',
    };
};

export const loginFetched = data => {
    return {
        type: 'LOGIN_FETCHED',
        payload: data,
    };
};

export const loginFetchingError = () => {
    return {
        type: 'LOGIN_FETCHING_ERROR',
    };
};
