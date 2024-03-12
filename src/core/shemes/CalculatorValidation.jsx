import * as Yup from 'yup';

export const validationSchema = Yup.object({
    distance: Yup.number()
        .positive("Значення не повинно бути від'ємним")
        .typeError("Обов'язкове числове поле!"),
    spotHeight: Yup.number()
        .positive("Значення не повинно бути від'ємним")
        .typeError("Обов'язкове числове поле!"),
    spotWidth: Yup.number()
        .positive("Значення не повинно бути від'ємним")
        .typeError("Обов'язкове числове поле!"),
    angleWidth: Yup.number()
        .positive("Значення не повинно бути від'ємним")
        .typeError("Обов'язкове числове поле!"),
    angleHeight: Yup.number()
        .positive("Значення не повинно бути від'ємним")
        .typeError("Обов'язкове числове поле!"),
    sensitivity: Yup.number()
        .positive("Значення не повинно бути від'ємним")
        .typeError("Обов'язкове числове поле!"),
    power: Yup.number()
        .positive("Значення не повинно бути від'ємним")
        .typeError("Обов'язкове числове поле!"),
    minPlumeSize: Yup.number()
        .positive("Значення не повинно бути від'ємним")
        .typeError("Обов'язкове числове поле!"),
    distanceModuleThird: Yup.number()
        .positive("Значення не повинно бути від'ємним")
        .typeError("Обов'язкове числове поле!"),
});
