export const userDataFetching = () => {
    return {
        type: 'USERDATA_FETCHING',
    };
};

export const userDataFetched = data => {
    return {
        type: 'USERDATA_FETCHED',
        payload: data,
    };
};

export const userDataFetchingError = () => {
    return {
        type: 'USERDATA_FETCHING_ERROR',
    };
};
