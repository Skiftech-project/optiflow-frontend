import { Formik, Form } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import validationSchema from '../../../core/shemes/ShemaFirstModule';

import InputBlock from '../../simple/InputBlock/InputBlock';
import { Button } from 'antd';
import { Radio } from 'antd';
import { Select } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './FirstModule.css';

const initialValues = {
    distance: 1,
    sensitivity: '',
    power: '',
    angleWidth: 1,
    angleHeight: 1,
    spotWidth: 1,
    spotHeight: 1,
    plumeForm: 'rectangle',
};

const FirstModule = () => {
    const [selectedOption, setSelectedOption] = useState('angles');
    // const [data, setData] = useState({
    //     max_area: 0,
    //     max_distance: 0,
    //     angle_width: 0,
    //     angle_height: 0,
    // });

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFormSubmit = async (values) => {
        const updatedValues = { ...values };
        try {
            if (selectedOption === 'angles') {
                delete updatedValues.spotWidth;
                delete updatedValues.spotHeight;
                delete updatedValues.distance;
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
            //setData(response.data);
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

                        <div className="radio">
                            <div className="radio__label">
                                Оберіть опцію розрахунку:
                            </div>
                            <Radio.Group
                                defaultValue="angles"
                                buttonStyle="solid"
                                size="middle"
                                className="radio__group"
                            >
                                <Radio.Button
                                    className="radio__item"
                                    type="radio"
                                    name="option"
                                    value="angles"
                                    checked={selectedOption === 'angles'}
                                    onChange={handleOptionChange}
                                >
                                    Кути
                                </Radio.Button>
                                <Radio.Button
                                    className="radio__item"
                                    type="radio"
                                    name="option"
                                    value="dimensions"
                                    checked={selectedOption === 'dimensions'}
                                    onChange={handleOptionChange}
                                >
                                    Пляма
                                </Radio.Button>
                            </Radio.Group>

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
                        </div>
                        <Select
                            name="plumeForm"
                            className="form__select"
                            defaultValue="rectangle"
                            options={[
                                {
                                    value: 'rectangle',
                                    label: 'Прямокутник',
                                },
                                {
                                    value: 'ellipse',
                                    label: 'Еліпс',
                                },
                            ]}
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
        </div>
    );
};

export default FirstModule;
