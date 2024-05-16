export const forgotPasswordFetching = () => {
    return {
        type: 'FORGOT_PASSWORD_FETCHING',
    };
};

export const forgotPasswordFetched = data => {
    return {
        type: 'FORGOT_PASSWORD_FETCHED',
        payload: data,
    };
};

export const forgotPasswordFetchingError = () => {
    return {
        type: 'FORGOT_PASSWORD_FETCHING_ERROR',
    };
};
