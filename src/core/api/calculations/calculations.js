import { calculationsUrl, diagramCreationUrl } from 'src/core/config/endpoints';
import { $api } from 'src/core/http';

export const basicCalculationsRequest = async data => {
    try {
        const response = await $api.post(calculationsUrl, data);
        return response.data;
    } catch (error) {
        throw error.message;
    }
};

export const diagramRequest = async data => {
    try {
        const response = await $api.post(diagramCreationUrl, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw error.message;
    }
};
