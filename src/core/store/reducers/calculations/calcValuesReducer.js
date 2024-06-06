const initialState = {
    calcValues: null,
};

export const calcValuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CALC_VALUES':
            return {
                ...state,
                calcValues: action.payload,
            };

        default:
            return state;
    }
};
