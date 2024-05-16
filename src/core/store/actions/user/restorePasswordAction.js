export const restorePasswordFetching = () => {
    return {
        type: 'RESTORE_PASSWORD_FETCHING',
    };
};

export const restorePasswordFetched = data => {
    return {
        type: 'RESTORE_PASSWORD_FETCHED',
        payload: data,
    };
};

export const restorePasswordFetchingError = () => {
    return {
        type: 'RESTORE_PASSWORD_FETCHING_ERROR',
    };
};
