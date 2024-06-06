import {
    deleteUserUrl,
    forgotPasswordUrl,
    restorePasswordUrl,
    updatePasswordUrl,
    updateUserDataUrl,
} from 'src/core/config/endpoints';
import { $api } from 'src/core/http';

export const updateUsernameEmailRequest = async (username, email) => {
    try {
        const data = {
            username: username,
            email: email,
        };
        const response = await $api.put(updateUserDataUrl, data);
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
        const response = await $api.put(updatePasswordUrl, data);
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
        const response = await $api.post(forgotPasswordUrl, data);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const restorePasswordRequest = async password => {
    try {
        const data = {
            password: password,
        };
        const response = await $api.put(restorePasswordUrl, data);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const deleteUserRequest = async () => {
    try {
        const response = await $api.delete(deleteUserUrl);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
