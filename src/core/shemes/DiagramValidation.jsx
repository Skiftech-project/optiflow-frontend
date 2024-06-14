export const validationSchema = {
    discrette: {
        required: true,
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) > 0 || 'Значення повинно бути більше 0',
            moreThan180: value =>
                parseFloat(value) <= 180 || 'Значення не може бути більше 180',
        },
    },

    sensitivity: {
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) > 0 || 'Число повинно бути більше 0',
        },
    },

    power: {
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) > 0 || 'Число повинно бути більше 0',
        },
    },
};
