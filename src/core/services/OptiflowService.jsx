import $api from '../api';

const useOptiflowService = () => {
    const calculateData = data => {
        return $api.post('/calc', { data });
    };

    return {
        calculateData,
    };
};

export default useOptiflowService;
