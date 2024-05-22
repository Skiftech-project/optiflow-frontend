import { useDispatch } from 'react-redux';

import {
    deleteTemplateRequest,
    getAllTemplatesRequest,
    saveTemplateRequest,
} from '../api';
import {
    deleteTemplateFetched,
    deleteTemplateFetching,
    deleteTemplateFetchingError,
} from '../store/actions';

const useTemplateService = () => {
    const dispatch = useDispatch();

    const getAllTemplates = () => {
        const response = getAllTemplatesRequest()
            .then(data => {
                return data;
            })
            .catch(error => {
                return error;
            });

        return response;
    };

    const saveTemplate = data => {
        const response = saveTemplateRequest(data)
            .then(data => {
                return data;
            })
            .catch(error => {
                throw error;
            });

        return response;
    };

    const deleteTemplate = data => {
        dispatch(deleteTemplateFetching());

        const response = deleteTemplateRequest(data)
            .then(data => {
                dispatch(deleteTemplateFetched());
                return data;
            })
            .catch(error => {
                dispatch(deleteTemplateFetchingError());
                throw error;
            });

        return response;
    };

    return {
        getAllTemplates,
        saveTemplate,
        deleteTemplate,
    };
};

export default useTemplateService;
