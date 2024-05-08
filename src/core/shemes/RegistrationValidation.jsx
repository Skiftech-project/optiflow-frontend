import * as Yup from 'yup';

export const validationSchema = Yup.object({
    username: Yup.string()
        .min(2, "Ім'я не може бути менше 2 символів")
        .required("Обов'язкове поле"),
    email: Yup.string().email('Не правильно введена пошта').required("Обов'язкове поле"),
    password: Yup.string()
        .min(8, 'Пароль повинен містити принаймні 8 символів')
        .max(20, 'Пароль не може бути більше 20 символів')
        .required("Обов'язкове поле")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Пароль повинен містити символи: A-z, 0-9, ! @ $ % ^ & *() ?.',
        ),
});
