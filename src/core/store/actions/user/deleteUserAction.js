export const deleteUserFetching = () => {
    return {
        type: 'DELETE_USER_FETCHING',
    };
};

export const deleteUserFetched = data => {
    return {
        type: 'DELETE_USER_FETCHED',
        payload: data,
    };
};

export const deleteUserFetchingError = () => {
    return {
        type: 'DELETE_USER_FETCHING_ERROR',
    };
};
