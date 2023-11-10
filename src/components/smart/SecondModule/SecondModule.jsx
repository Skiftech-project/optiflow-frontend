import { Formik, Form } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import validationSchema from '../../../core/shemes/ShemaSecondModule';

import InputBlock from '../../simple/InputBlock/InputBlock';
import { Button } from 'antd';
import './SecondModule.css';

const initialValues = {
    min_plume_size: '',
    angleWidth: 1,
    angleHeight: 1,
};

const SecondModule = () => {
    const [data, setData] = useState({
        min_distance: 0,
    });

    const handleFormSubmit = async (values) => {
        const updatedValues = { ...values };
        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/module_2',
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
        <div className="data">
            <div className="form">
                <div className="form__title">
                    Калькулятор розрахунку мінімальної ефективної дистанції
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    <Form className="form__body">
                        <InputBlock
                            label="Кут Ширини (°):"
                            id="angleWidth"
                            name="angleWidth"
                            type="number"
                        />

                        <InputBlock
                            label="Кут Висоти (°):"
                            id="angleHeight"
                            name="angleHeight"
                            type="number"
                        />
                        <InputBlock
                            label="Мінімальний розмір плями (м):"
                            id="min_plume_size"
                            name="min_plume_size"
                            type="number"
                        />

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

            <div className="output">
                <div className="output__item">
                    Мінімальна дистанція (м):
                    <br />
                    <span> {data.min_distance}</span>
                </div>
            </div>
        </div>
    );
};

export default SecondModule;
