import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string()
        .email('Не правильно введена пошта')
        .required("Обов'язкове поле")
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Некоректний email',
        ),
});
