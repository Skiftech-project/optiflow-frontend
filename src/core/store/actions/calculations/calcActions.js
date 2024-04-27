export const calcFetching = () => {
    return {
        type: 'CALC_FETCHING',
    };
};

export const calcFetched = data => {
    return {
        type: 'CALC_FETCHED',
        payload: data,
    };
};

export const calcFetchingError = () => {
    return {
        type: 'CALC_FETCHING_ERROR',
    };
};
