import { getAllTemplatesRequest } from '../api';

const useTemplateService = () => {
    const getAllTemplates = () => {
        const response = getAllTemplatesRequest()
            .then(data => {
                return data;
            })
            .catch(error => console.log(error));

        return response;
    };

    return {
        getAllTemplates,
    };
};

export default useTemplateService;
