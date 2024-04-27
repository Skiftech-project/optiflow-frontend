export const signupFetching = () => {
    return {
        type: 'SIGNUP_FETCHING',
    };
};

export const signupFetched = data => {
    return {
        type: 'SIGNUP_FETCHED',
        payload: data,
    };
};

export const signupFetchingError = () => {
    return {
        type: 'SIGNUP_FETCHING_ERROR',
    };
};
