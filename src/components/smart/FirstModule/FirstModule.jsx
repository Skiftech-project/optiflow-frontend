import { useState } from 'react';

import { Formik, Form } from 'formik';
import { Col, Row, Radio, Button } from 'antd';
import { Select } from 'formik-antd';

import axios from 'axios';

import InputBlock from '../../simple/InputBlock/InputBlock';
import validationSchema from '../../../core/shemes/ShemaFirstModule';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styles from './FirstModule.module.css';

const initialValues = {
    distance: 1,
    sensitivity: '',
    power: '',
    angleWidth: 1,
    angleHeight: 1,
    spotWidth: 1,
    spotHeight: 1,
    plumeForm: 'rectangle',
    minPlumeSize: '',
    distanceModuleThird: '',
};

const FirstModule = () => {
    const [selectedOption, setSelectedOption] = useState('dimensions');
    const [data, setData] = useState({
        max_distance: 0,
        min_distance: 0,
        angle_width: 0,
        angle_height: 0,
        plume_width_module3: 0,
        plume_height_module3: 0,
    });

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
                'https://skiftech-backend.onrender.com/2d',
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
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                <Form className={styles.calculator}>
                    <h2 className={styles.calculator__title}>
                        Калькулятор розрахунку області передачі даних в оптичних
                        системах
                    </h2>

                    <Row gutter={[15, 15]}>
                        <Col span={12}>
                            <div
                                className={`${styles.block} ${styles.geometry}`}
                            >
                                <div className={styles.title}>
                                    геометрія променю
                                </div>

                                <div className={styles.select}>
                                    <div className={styles.label}>
                                        Оберіть форму плями:
                                    </div>
                                    <Select
                                        className={styles.select}
                                        name="plumeForm"
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
                                </div>

                                <div className={styles.radio}>
                                    <div className={styles.radio__label}>
                                        Оберіть опцію розрахунку
                                    </div>

                                    <Radio.Group
                                        className={styles.radio__group}
                                        defaultValue="dimensions"
                                        buttonStyle="solid"
                                        size="middle"
                                    >
                                        <Radio.Button
                                            className="radio__item"
                                            type="radio"
                                            name="option"
                                            value="angles"
                                            checked={
                                                selectedOption === 'angles'
                                            }
                                            onChange={handleOptionChange}
                                        >
                                            Кути
                                        </Radio.Button>
                                        <Radio.Button
                                            className="radio__item"
                                            type="radio"
                                            name="option"
                                            value="dimensions"
                                            checked={
                                                selectedOption === 'dimensions'
                                            }
                                            onChange={handleOptionChange}
                                        >
                                            Пляма
                                        </Radio.Button>
                                    </Radio.Group>

                                    {selectedOption === 'angles' && (
                                        <>
                                            <InputBlock
                                                wrapperStyle={styles.wrapper}
                                                label="Кут Ширини (°):"
                                                id="angleWidth"
                                                name="angleWidth"
                                                type="number"
                                            />

                                            <InputBlock
                                                wrapperStyle={styles.wrapper}
                                                label="Кут Висоти (°):"
                                                id="angleHeight"
                                                name="angleHeight"
                                                type="number"
                                            />
                                        </>
                                    )}

                                    {selectedOption === 'dimensions' && (
                                        <>
                                            <InputBlock
                                                wrapperStyle={styles.wrapper}
                                                label="Відстань (м):"
                                                id="distance"
                                                name="distance"
                                                type="number"
                                            />

                                            <InputBlock
                                                wrapperStyle={styles.wrapper}
                                                label="Ширина Плями (м):"
                                                id="spotWidth"
                                                name="spotWidth"
                                                type="number"
                                            />

                                            <InputBlock
                                                wrapperStyle={styles.wrapper}
                                                label="Висота Плями (м):"
                                                id="spotHeight"
                                                name="spotHeight"
                                                type="number"
                                            />
                                        </>
                                    )}
                                </div>
                                <Button
                                    className={styles.btn}
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Розрахувати
                                </Button>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div
                                className={`${styles.block} ${styles.receiver}`}
                            >
                                <div className={styles.title}>
                                    параметри приймача та випромінювача
                                </div>
                                <InputBlock
                                    wrapperStyle={styles.wrapper}
                                    label="Чутливість (мВт/м²):"
                                    id="sensitivity"
                                    name="sensitivity"
                                    type="number"
                                />
                                <InputBlock
                                    wrapperStyle={styles.wrapper}
                                    label="Потужність (мВт):"
                                    id="power"
                                    name="power"
                                    type="number"
                                />
                            </div>
                            <div
                                className={`${styles.block} ${styles.additional}`}
                            >
                                <div className={styles.title}>
                                    додаткові параметри
                                </div>
                                <InputBlock
                                    wrapperStyle={styles.wrapper}
                                    label="Мінімальний розмір плями (м):"
                                    id="minPlumeSize"
                                    name="minPlumeSize"
                                    type="number"
                                />
                                <InputBlock
                                    wrapperStyle={styles.wrapper}
                                    label="Дистанція для розрахунку розмірів плями (м):"
                                    id="distanceModuleThird"
                                    name="distanceModuleThird"
                                    type="number"
                                />
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Formik>
            <h2 className={styles.calculator__title}>Результати обчислень</h2>
            <div className={styles.result}>
                <div className={styles.output}>
                    <h3>Геометрія променю</h3>
                    <p>
                        Кут ширини (°): <span>{data.angle_width}</span>
                    </p>
                    <p>
                        Кут висоти (°): <span>{data.angle_height}</span>
                    </p>
                </div>

                <div className={styles.output}>
                    <h3>Інші розраховані значення</h3>
                    <p>
                        Максимальна гарантована дистанція передачі даних (м):
                        <span>{data.max_distance}</span>
                    </p>
                    <p>
                        Мінімальна дистанція: <span>{data.min_distance}</span>
                    </p>
                </div>

                <div className={styles.output}>
                    <h3>
                        Лінійні розміри перерізу області передачі даних на
                        заданій дистанції
                    </h3>
                    <p>
                        Висота плями (м):{' '}
                        <span>{data.plume_height_module3}</span>
                    </p>
                    <p>
                        Ширина плями (М):{' '}
                        <span>{data.plume_width_module3}</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default FirstModule;
