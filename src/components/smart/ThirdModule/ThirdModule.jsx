import { Formik, Form } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import validationSchema from '../../../core/shemes/ShemaThirdModule';

import InputBlock from '../../simple/InputBlock/InputBlock';
import { Button } from 'antd';
import './ThirdModule.css';

const initialValues = {
    distance: '',
    angleWidth: 1,
    angleHeight: 1,
};

const ThirdModule = () => {
    const [data, setData] = useState({
        plume_width: 0,
        plume_height: 0,
    });

    const handleFormSubmit = async (values) => {
        const updatedValues = { ...values };
        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/module_3',
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
                    Калькулятор розрахунку розмірів перерізу області передачі
                    даних на заданій дистанції
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
                            label="Задана дистанція (м):"
                            id="distance"
                            name="distance"
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
                    Ширина плями (м):
                    <br />
                    <span> {data.plume_width}</span>
                </div>
                <div className="output__item">
                    Висота плями (м):
                    <br />
                    <span> {data.plume_height}</span>
                </div>
            </div>
        </div>
    );
};

export default ThirdModule;
