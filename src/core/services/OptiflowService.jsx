// import $api from '../api';

const useOptiflowService = () => {
    const calculateData = data => {
        let imitateBackendData = {
            angleWidth: data.distance * 5,
            angleHeight: 7,
            plumeWidth: 10,
            plumeHeight: 7.5,
            minDistance: 0.9,
            maxDistance: 60,
        };

        return imitateBackendData;
    };

    return {
        calculateData,
    };
};

export default useOptiflowService;
