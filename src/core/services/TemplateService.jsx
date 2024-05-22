import { getAllTemplatesRequest, saveTemplateRequest } from '../api';

const useTemplateService = () => {
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

    return {
        getAllTemplates,
        saveTemplate,
    };
};

export default useTemplateService;
