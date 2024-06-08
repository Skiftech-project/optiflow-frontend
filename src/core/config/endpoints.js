//base url
// export const apiBase = 'http://127.0.0.1:5000';
export const apiBase = 'https://optiflowbackend.azurewebsites.net';

//auth endpoints
export const registerUrl = apiBase + '/auth/register';
export const loginUrl = apiBase + '/auth/login';
export const logoutUrl = apiBase + '/auth/logout';
export const refreshTokenUrl = apiBase + '/auth/refresh';

//calculations endpoints
export const calculationsUrl = apiBase + '/2d';

//user endpoints
export const updateUserDataUrl = apiBase + '/auth/updateProfile';
export const updatePasswordUrl = apiBase + '/auth/updateUserPassword';
export const forgotPasswordUrl = apiBase + '/auth/sendResetEmail';
export const restorePasswordUrl = apiBase + '/auth/restorePassword';
export const deleteUserUrl = apiBase + '/auth/deleteAccount';

// templates endpoints
export const getAllTemplates = apiBase + '/templates/getUserSavedTemplates';
export const saveTemplateEndpoint = apiBase + '/templates/saveTemplate';
export const deleteTemplate = apiBase + '/templates/deleteTemplate';
