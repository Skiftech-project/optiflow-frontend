import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string().email('Не правильно введена пошта').required("Обов'язкове поле"),
    password: Yup.string().required("Обов'язкове поле"),
});
