import axios from 'axios';

// export const apiBase = 'http://localhost:7000';
export const apiBase = 'https://optiflowbackend.azurewebsites.net';

// const accessToken = sessionStorage.getItem('accessToken'); TODO: We need it for future

export const $api = axios.create({
    baseURL: apiBase, // Change it
    withCredentials: true,
    // timeout: 1000, // Maximum time to wait for a response from the server in milliseconds. t > 1000 - axios will generate a timeout error
    headers: {},
});

// * Interceptor на каждый запрос на сервер, теперь будет вешатся хедер с токеном из localStorage
// $api.interceptors.request.use(config => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });

export const signup = async (username, email, password) => {
    try {
        const response = await $api.post('/auth/register', { username, email, password });
        return response.data;
    } catch (error) {
        throw error.message;
    }
};
