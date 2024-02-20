import axios from 'axios';

// const accessToken = sessionStorage.getItem('accessToken'); TODO: We need it for future

export const api = axios.create({
    baseURL: `http://localhost:7000`, // Change it
    timeout: 1000, // Maximum time to wait for a response from the server in milliseconds. t > 1000 - axios will generate a timeout error
    headers: {},
});

// export const apiAuth = axios.create({
//     baseURL: 'http://localhost:7000', // Change it
//     timeout: 1000,
//     headers: {
//         Authorization: `Bearer ${token}`,
//     },
// });
