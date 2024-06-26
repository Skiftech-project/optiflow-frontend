import { combineReducers } from 'redux';

import { authReducer, loginReducer, logoutReducer, signupReducer } from './auth';
import { calcReducer } from './calculations';
import { calcValuesReducer } from './calculations';
import { diagramReducer } from './calculations';
import { deleteTemplateReducer } from './templateRedusers/deleteTemplateReducer';
import { getTemplatesReducer } from './templateRedusers/getTemplatesReducer';
import { saveTemplateReducer } from './templateRedusers/saveTemplateReducer';
import { passwordReducer } from './user';
import { userDataReducer } from './user';
import { deleteUserReducer } from './user/deleteUserReducer';
import { forgotPasswordReducer } from './user/forgotPasswordReducer';
import { restorePasswordReducer } from './user/restorePasswordReducer';

const reducer = combineReducers({
    //auth
    login: loginReducer,
    logout: logoutReducer,
    signup: signupReducer,
    auth: authReducer,

    //user
    userData: userDataReducer,
    deleteUser: deleteUserReducer,

    //calc
    diagram: diagramReducer,
    calc: calcReducer,
    calcValues: calcValuesReducer,

    //password
    password: passwordReducer,
    forgotPassword: forgotPasswordReducer,
    restorePassword: restorePasswordReducer,

    //templates
    deleteTemplate: deleteTemplateReducer,
    getTemplates: getTemplatesReducer,
    saveTemplate: saveTemplateReducer,
});

export default reducer;
