import { getAllTemplates } from 'src/core/config/endpoints';
import { $api } from 'src/core/http';

export const getAllTemplatesRequest = async () => {
    try {
        const response = await $api.get(getAllTemplates);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
