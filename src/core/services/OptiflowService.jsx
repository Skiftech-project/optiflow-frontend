import { useDispatch } from 'react-redux';

import { basicCalculationsRequest, diagramRequest } from '../api';
import { calcFetched, calcFetching, calcFetchingError } from '../store/actions';
import { diagramFetched, diagramFetching, diagramFetchingError } from '../store/actions';
import { setCalcValues } from '../store/actions';

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

    const calculateDiagram = file => {
        dispatch(diagramFetching());

        const formData = new FormData();
        formData.append('input_data', file);

        const response = diagramRequest(formData)
            .then(data => dispatch(diagramFetched(data)))
            .catch(error => {
                dispatch(diagramFetchingError());
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
        calculateDiagram,
    };
};

export default useOptiflowService;
