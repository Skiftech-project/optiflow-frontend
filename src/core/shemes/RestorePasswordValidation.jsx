import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstNewPassword: Yup.string()
        .min(8, 'Пароль повинен містити принаймні 8 символів')
        .max(20, 'Пароль не може бути більше 20 символів')
        .required("Обов'язкове поле")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Пароль повинен містити символи: A-z, 0-9, ! @ $ % ^ & *() ?.',
        ),
    secondNewPassword: Yup.string()
        .oneOf([Yup.ref('firstNewPassword'), null], 'Паролі повинні співпадати')
        .min(8, 'Пароль повинен містити принаймні 8 символів')
        .max(20, 'Пароль не може бути більше 20 символів')
        .required("Обов'язкове поле")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Пароль повинен містити символи: A-z, 0-9, ! @ $ % ^ & *() ?.',
        ),
});
