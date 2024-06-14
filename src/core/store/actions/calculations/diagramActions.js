export const diagramFetching = () => {
    return {
        type: 'DIAGRAM_FETCHING',
    };
};

export const diagramFetched = data => {
    return {
        type: 'DIAGRAM_FETCHED',
        payload: data,
    };
};

export const diagramFetchingError = () => {
    return {
        type: 'DIAGRAM_FETCHING_ERROR',
    };
};
