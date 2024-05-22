import { getAllTemplates, saveTemplateEndpoint } from 'src/core/config/endpoints';
import { $api } from 'src/core/http';

export const getAllTemplatesRequest = async () => {
    try {
        const response = await $api.get(getAllTemplates);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const saveTemplateRequest = async data => {
    try {
        const response = await $api.post(saveTemplateEndpoint, data);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
