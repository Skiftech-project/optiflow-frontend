import { getAllTemplatesRequest, saveTemplateRequest } from '../api';

const useTemplateService = () => {
    const getAllTemplates = () => {
        const response = getAllTemplatesRequest()
            .then(data => {
                return data;
            })
            .catch(error => console.log(error));

        return response;
    };

    const saveTemplate = data => {
        const response = saveTemplateRequest(data)
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });

        return response;
    };

    return {
        getAllTemplates,
        saveTemplate,
    };
};

export default useTemplateService;
