import { $api } from 'src/core/http';

export const updateUsernameEmailRequest = async (username, email) => {
    try {
        const data = {
            username: username,
            email: email,
        };
        const response = await $api.put('/auth/updateProfile', data);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
