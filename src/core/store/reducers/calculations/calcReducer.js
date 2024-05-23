const initialState = {
    calculations: null,
    calculationsLoadingStatus: 'idle',
};

export const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CALC_FETCHING':
            return { ...state, calculationsLoadingStatus: 'loading' };

        case 'CALC_FETCHED':
            return {
                ...state,
                calculations: action.payload,
                calculationsLoadingStatus: 'idle',
            };

        case 'CALC_FETCHING_ERROR':
            return { ...state, calculationsLoadingStatus: 'error' };

        default:
            return state;
    }
};
