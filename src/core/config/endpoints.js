// export const apiBase = 'http://127.0.0.1:5000';
export const apiBase = 'https://optiflowbackend.azurewebsites.net';

export const registerUrl = apiBase + '/auth/register';
export const loginUrl = apiBase + '/auth/login';
export const logoutUrl = apiBase + '/auth/logout';
export const refreshTokenUrl = apiBase + '/auth/refresh';

export const calculationsUrl = apiBase + '/2d';

export const updateUserDataUrl = apiBase + '/auth/updateProfile';
export const updatePasswordUrl = apiBase + '/auth/updateUserPassword';
export const forgotPasswordUrl = apiBase + '/auth/sendResetEmail';
export const restorePasswordUrl = apiBase + '/auth/restorePassword';