import * as Yup from 'yup';

const validationSchema = Yup.object({
    distance: Yup.number()
        .required("Це поле є обов'язковим")
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),

    angleWidth: Yup.number()
        .required("Це поле є обов'язковим")
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),
    angleHeight: Yup.number()
        .required("Це поле є обов'язковим")
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),
});

export default validationSchema;
