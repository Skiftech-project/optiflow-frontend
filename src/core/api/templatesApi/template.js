import {
    deleteTemplate,
    getAllTemplates,
    saveTemplateEndpoint,
} from 'src/core/config/endpoints';
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

export const deleteTemplateRequest = async id => {
    try {
        const data = {
            id: id,
        };
        const response = await $api.delete(deleteTemplate, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        });
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
