import { useDispatch } from 'react-redux';

import { basicCalculationsRequest } from '../api';
import {
    calcFetched,
    calcFetching,
    calcFetchingError,
    setCalcValues,
} from '../store/actions';

const useOptiflowService = () => {
    const dispatch = useDispatch();

    const calculateData = data => {
        dispatch(calcFetching());
        const response = basicCalculationsRequest(data)
            .then(data => dispatch(calcFetched(data)))
            .catch(error => {
                dispatch(calcFetchingError());
                return error;
            });
        return response;
    };

    const saveInputValues = data => {
        dispatch(setCalcValues(data));
    };

    return {
        calculateData,
        saveInputValues,
    };
};

export default useOptiflowService;
