import { useDispatch } from 'react-redux';

import { basicCalculationsRequest } from '../api';
import { calcFetched, calcFetching, calcFetchingError } from '../store/actions';

const useOptiflowService = () => {
    const dispatch = useDispatch();

    const calculateData = data => {
        dispatch(calcFetching());
        const response = basicCalculationsRequest(data)
            .then(data => dispatch(calcFetched(_transformCalcs(data))))
            .catch(error => {
                dispatch(calcFetchingError());
                return error;
            });
        return response;
    };

    const _transformCalcs = data => {
        return {
            angleHeight: data.angle_height,
            angleWidth: data.angle_width,
            maxDistance: data.max_distance,
            minDistance: data.min_distance,
            plumeForm: data.plumeForm,
            plumeHeight: data.plume_height_module3,
            plumeWidth: data.plume_width_module3,
        };
    };

    return {
        calculateData,
    };
};

export default useOptiflowService;
