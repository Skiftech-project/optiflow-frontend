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

export const updatePasswordRequest = async (newPassword, oldPassword) => {
    try {
        const data = {
            new_password: newPassword,
            old_password: oldPassword,
        };
        const response = await $api.put('/auth/updateUserPassword', data);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const forgotPasswordRequest = async email => {
    try {
        const data = {
            email: email,
        };
        const response = await $api.post('/auth/sendResetEmail', data);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
