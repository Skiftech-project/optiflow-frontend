import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import validationSchema from '../../../core/shemes/ShemaFirstModule';

import InputBlock from '../../simple/InputBlock/InputBlock';
import { Button } from 'antd';
import './FirstModule.css';

const initialValues = {
    distance: '',
    sensitivity: '',
    power: '',
    angleWidth: 1,
    angleHeight: 1,
    spotWidth: 1,
    spotHeight: 1,
};

const FirstModule = () => {
    const [selectedOption, setSelectedOption] = useState('angles');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFormSubmit = async (values) => {
        const updatedValues = { ...values };
        try {
            if (selectedOption === 'angles') {
                delete updatedValues.spotWidth;
                delete updatedValues.spotHeight;
            } else if (selectedOption === 'dimensions') {
                delete updatedValues.angleWidth;
                delete updatedValues.angleHeight;
            }
            const response = await axios.post(
                'http://127.0.0.1:5000/index',
                updatedValues,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            console.log('Успешно отправлено', response.data);
            setData(response.data);
        } catch (error) {
            console.error('Произошла ошибка при отправке данных', error);
        }
    };

    return (
        <div className="forms">
            <div className="form">
                <div className="form__title">модуль 4 та 1</div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    <Form className="form__body">
                        <div className="form__item">
                            <InputBlock
                                label="Чутливість (мВт/м²):"
                                id="sensitivity"
                                name="sensitivity"
                                type="number"
                            />
                        </div>

                        <div className="form__item">
                            <InputBlock
                                label="Потужність (мВт):"
                                id="power"
                                name="power"
                                type="number"
                            />
                        </div>

                        {/* form radio */}
                        <div className="form__item">
                            <label className="form__label">
                                Оберіть опцію:
                            </label>
                            <div className="radio">
                                <div className="radio__item">
                                    <label>Кути:</label>
                                    <Field
                                        type="radio"
                                        name="option"
                                        value="angles"
                                        checked={selectedOption === 'angles'}
                                        onChange={handleOptionChange}
                                    />
                                </div>
                                <div className="radio__item">
                                    <label>Пляма:</label>
                                    <Field
                                        type="radio"
                                        name="option"
                                        value="dimensions"
                                        checked={
                                            selectedOption === 'dimensions'
                                        }
                                        onChange={handleOptionChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {selectedOption === 'angles' && (
                            <>
                                <div className="form__item">
                                    <InputBlock
                                        label="Кут Ширини (°):"
                                        id="angleWidth"
                                        name="angleWidth"
                                        type="number"
                                    />
                                </div>
                                <div className="form__item">
                                    <InputBlock
                                        label="Кут Висоти (°):"
                                        id="angleHeight"
                                        name="angleHeight"
                                        type="number"
                                    />
                                </div>
                            </>
                        )}

                        {selectedOption === 'dimensions' && (
                            <>
                                <div className="form__item">
                                    <InputBlock
                                        label="Відстань (м):"
                                        id="distance"
                                        name="distance"
                                        type="number"
                                    />
                                </div>
                                <div className="form__item">
                                    <InputBlock
                                        label="Ширина Плями (м):"
                                        id="spotWidth"
                                        name="spotWidth"
                                        type="number"
                                    />
                                </div>
                                <div className="form__item">
                                    <InputBlock
                                        label="Висота Плями (м):"
                                        id="spotHeight"
                                        name="spotHeight"
                                        type="number"
                                    />
                                </div>
                            </>
                        )}
                    </Form>
                </Formik>
            </div>
            <div className="form">
                <div className="form__title">модуль 2</div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    <Form className="form__body">
                        <div className="form__item">
                            <InputBlock
                                label="Кут Ширини (°):"
                                id="angleWidth"
                                name="angleWidth"
                                type="number"
                            />
                        </div>
                        <div className="form__item">
                            <InputBlock
                                label="Кут Висоти (°):"
                                id="angleHeight"
                                name="angleHeight"
                                type="number"
                            />
                        </div>

                        <div className="form__item">
                            <InputBlock
                                label="Мінімальний розмір плями (м):"
                                id="minSize"
                                name="minSize"
                                type="number"
                            />
                        </div>

                        <Button
                            className="form__button"
                            type="primary"
                            htmlType="submit"
                        >
                            Розрахувати
                        </Button>
                    </Form>
                </Formik>
            </div>
            <div className="form">
                <div className="form__title">модуль 3</div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    <Form className="form__body">
                        <div className="form__item">
                            <InputBlock
                                label="Кут Ширини (°):"
                                id="angleWidth"
                                name="angleWidth"
                                type="number"
                            />
                        </div>
                        <div className="form__item">
                            <InputBlock
                                label="Кут Висоти (°):"
                                id="angleHeight"
                                name="angleHeight"
                                type="number"
                            />
                        </div>

                        <div className="form__item">
                            <InputBlock
                                label="Дистанція (м):"
                                id="power"
                                name="power"
                                type="number"
                            />
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default FirstModule;
