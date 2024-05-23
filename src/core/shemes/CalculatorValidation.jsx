export const validationSchema = {
    distance: {
        required: true,
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) > 0 || 'Число повинно бути більше 0',
        },
    },

    spotHeight: {
        required: true,
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) > 0 || 'Число повинно бути більше 0',
        },
    },

    spotWidth: {
        required: true,
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) > 0 || 'Число повинно бути більше 0',
        },
    },

    angleWidth: {
        required: true,
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            moreThan180: value =>
                parseFloat(value) <= 180 || 'Кут не може бути 180° та більше',
            positive: value => parseFloat(value) > 0 || 'Кут не може бути 0° та менше',
        },
    },

    angleHeight: {
        required: true,
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            moreThan180: value =>
                parseFloat(value) <= 180 || 'Кут не може бути 180° та більше',
            positive: value => parseFloat(value) > 0 || 'Кут не може бути 0° та менше',
        },
    },

    sensitivity: {
        required: true,
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) > 0 || 'Число повинно бути більше 0',
        },
    },

    power: {
        required: true,
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) > 0 || 'Число повинно бути більше 0',
        },
    },

    minPlumeSize: {
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) >= 0 || 'Число повинно бути позитивним',
        },
    },

    distanceModuleThird: {
        validate: {
            number: value => !isNaN(value) || 'Значення повинно бути числовим',
            positive: value => parseFloat(value) >= 0 || 'Число повинно бути позитивним',
        },
    },
};
