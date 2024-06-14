/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
    getTemplatesFetched,
    getTemplatesFetching,
    getTemplatesFetchingError,
} from 'src/core/store/actions';

import {
    deleteTemplateRequest,
    getAllTemplatesRequest,
    saveTemplateRequest,
} from '../api';
import {
    deleteTemplateFetched,
    deleteTemplateFetching,
    deleteTemplateFetchingError,
    saveTemplateFetched,
    saveTemplateFetching,
    saveTemplateFetchingError,
} from '../store/actions';

const useTemplateService = () => {
    const dispatch = useDispatch();

    const getAllTemplates = useCallback(() => {
        dispatch(getTemplatesFetching());
        const response = getAllTemplatesRequest()
            .then(data => {
                dispatch(getTemplatesFetched(data.templates));
            })
            .catch(error => {
                dispatch(getTemplatesFetchingError());
                return error;
            });

        return response;
    }, [dispatch]);

    const saveTemplate = useCallback((templateName, input, output) => {
        const transformedInputData = _transformInputData(input);
        const transformedOutputData = _transformOutputData(output);

        const data = {
            title: templateName,
            input_data: transformedInputData,
            output_data: transformedOutputData,
        };

        dispatch(saveTemplateFetching());

        const response = saveTemplateRequest(data)
            .then(data => {
                dispatch(saveTemplateFetched());
                return data;
            })
            .catch(error => {
                dispatch(saveTemplateFetchingError());
                throw error;
            });

        return response;
    }, []);

    const deleteTemplate = useCallback(id => {
        dispatch(deleteTemplateFetching());

        const response = deleteTemplateRequest(id)
            .then(data => {
                dispatch(deleteTemplateFetched());
                dispatch(getTemplatesFetched([]));
                getAllTemplates();
                return data;
            })
            .catch(error => {
                dispatch(deleteTemplateFetchingError());
                throw error;
            });

        return response;
    }, []);

    const _transformInputData = data => {
        return {
            angle_height: +data.angleHeight,
            angle_width: +data.angleWidth,
            calculator_type: data.calculatorType,
            distance: +data.distance,
            distance_for_plume_size: +data.distanceModuleThird,
            min_plume_size: +data.minPlumeSize,
            plume_form: data.plumeForm,
            power: +data.power,
            sensitivity: +data.sensitivity,
            spot_height: +data.spotHeight,
            spot_width: +data.spotWidth,
        };
    };

    const _transformOutputData = data => {
        return {
            max_distance: data.max_distance,
            min_distance: data.min_distance,
            plume_height_module3: data.plume_height_cut,
            plume_width_module3: data.plume_width_cut,
            angle_height: data.angle_height,
            angle_width: data.angle_width,
        };
    };

    return {
        getAllTemplates,
        saveTemplate,
        deleteTemplate,
    };
};

export default useTemplateService;
