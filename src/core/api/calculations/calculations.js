import { $api } from 'src/core/http';

export const basicCalculationsRequest = async data => {
    try {
        const response = await $api.post('/2d', data);
        return response.data;
    } catch (error) {
        throw error.message;
    }
};
