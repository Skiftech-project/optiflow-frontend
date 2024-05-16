import * as Yup from 'yup';

export const validationSchema = Yup.object({
    username: Yup.string().min(2, "Ім'я не може бути менше 2 символів"),
    email: Yup.string()
        .email('Не правильно введена пошта')
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Некоректний email',
        ),
});
