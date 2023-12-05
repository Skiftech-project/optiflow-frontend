import * as Yup from 'yup';

const validationSchema = Yup.object({
    distance: Yup.number()
        .required("Це поле є обов'язковим")
        .min(0, "Значення не повинно бути від'ємним")
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),

    sensitivity: Yup.number()
        .required("Це поле є обов'язковим")
        .min(0, "Значення не повинно бути від'ємним")
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),
    power: Yup.number()
        .required("Це поле є обов'язковим")
        .min(0, "Значення не повинно бути від'ємним")
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),
    angleWidth: Yup.number()
        .required("Це поле є обов'язковим")
        .min(0, "Значення не повинно бути від'ємним")
        .max(180, 'Значення повинно бути менше або рівне 180')
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),
    angleHeight: Yup.number()
        .required("Це поле є обов'язковим")
        .min(0, "Значення не повинно бути від'ємним")
        .max(180, 'Значення повинно бути менше або рівне 180')
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),
    spotWidth: Yup.number()
        .required("Це поле є обов'язковим")
        .min(0, "Значення не повинно бути від'ємним")
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),
    spotHeight: Yup.number()
        .required("Це поле є обов'язковим")
        .min(0, "Значення не повинно бути від'ємним")
        .test(
            'not-zero',
            'Значення не повинно бути рівним 0',
            (value) => value !== 0,
        ),
    minPlumeSize: Yup.number()
        .required("Це поле є обов'язковим")
        .min(0, "Значення не повинно бути від'ємним"),

    distanceModuleThird: Yup.number()
        .required("Це поле є обов'язковим")
        .min(0, "Значення не повинно бути від'ємним"),
});

export default validationSchema;
