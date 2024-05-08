import { useDispatch } from 'react-redux';

import { basicCalculationsRequest } from '../api';
import { calcFetched, calcFetching, calcFetchingError } from '../store/actions';

const useOptiflowService = () => {
    const dispatch = useDispatch();

    const calculateData = data => {
        dispatch(calcFetching());
        basicCalculationsRequest(data)
            .then(data => dispatch(calcFetched(data)))
            .catch(() => dispatch(calcFetchingError()));
    };

    return {
        calculateData,
    };
};

export default useOptiflowService;
