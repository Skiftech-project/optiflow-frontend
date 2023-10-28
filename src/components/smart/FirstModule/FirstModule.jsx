import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Radio } from 'antd';
import { Button } from 'antd';
import './FirstModule.css';

const FirstModule = () => {
    const [selectedOption, setSelectedOption] = useState('ellipse');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="data">
            <div className="form">
                <div className="form__title">
                    Калькулятор розсіяння зони плями
                </div>
                <Formik
                    initialValues={{
                        distance: 0,
                        sensitivity: 0,
                        power: 0,
                        angleWidth: 0,
                        angleHeight: 0,
                        spotWidth: 0,
                        spotHeight: 0,
                    }}
                    validationSchema={Yup.object({
                        distance: Yup.number()
                            .required("Це поле є обов'язковим")
                            .test(
                                'not-zero',
                                'Значення не повинно бути рівним 0',
                                (value) => value !== 0,
                            ),
                        sensitivity: Yup.number()
                            .required("Це поле є обов'язковим")
                            .test(
                                'not-zero',
                                'Значення не повинно бути рівним 0',
                                (value) => value !== 0,
                            ),
                        power: Yup.number()
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
                        spotWidth: Yup.number()
                            .required("Це поле є обов'язковим")
                            .test(
                                'not-zero',
                                'Значення не повинно бути рівним 0',
                                (value) => value !== 0,
                            ),
                        spotHeight: Yup.number()
                            .required("Це поле є обов'язковим")
                            .test(
                                'not-zero',
                                'Значення не повинно бути рівним 0',
                                (value) => value !== 0,
                            ),
                    })}
                    onSubmit={(values) =>
                        console.log(JSON.stringify(values, null, 2))
                    }
                >
                    <Form className="form__body">
                        <div className="form__item">
                            <label
                                htmlFor="distance"
                                className="form__label"
                            >
                                Відстань (м):
                            </label>
                            <Field
                                id="distance"
                                name="distance"
                                type="number"
                            />
                            <ErrorMessage
                                className="error"
                                name="distance"
                                component="div"
                            />
                        </div>

                        <div className="form__item">
                            <label
                                htmlFor="sensitivity"
                                className="form__label"
                            >
                                Чутливість (мВт/м²):
                            </label>
                            <Field
                                id="sensitivity"
                                name="sensitivity"
                                type="number"
                            />
                            <ErrorMessage
                                className="error"
                                name="sensitivity"
                                component="div"
                            />
                        </div>

                        <div className="form__item">
                            <label
                                htmlFor="power"
                                className="form__label"
                            >
                                Потужність (мВт):
                            </label>
                            <Field
                                id="power"
                                name="power"
                                type="number"
                            />
                            <ErrorMessage
                                className="error"
                                name="power"
                                component="div"
                            />
                        </div>

                        <Radio.Group
                            value={selectedOption}
                            buttonStyle="solid"
                            className="form__item form__select"
                            onChange={handleOptionChange}
                        >
                            <Radio.Button
                                defaultChecked
                                value="ellipse"
                            >
                                Ввести кути
                            </Radio.Button>
                            <Radio.Button value="rectangle">
                                Ввести довжини
                            </Radio.Button>
                        </Radio.Group>
                        {selectedOption === 'ellipse' && (
                            <>
                                <div className="form__item">
                                    <label
                                        htmlFor="angleWidth"
                                        className="form__label"
                                    >
                                        Кут Ширини (°):
                                    </label>
                                    <Field
                                        id="angleWidth"
                                        name="angleWidth"
                                        type="number"
                                    />
                                    <ErrorMessage
                                        className="error"
                                        name="angleWidth"
                                        component="div"
                                    />
                                </div>
                                <div className="form__item">
                                    <label
                                        htmlFor="angleHeight"
                                        className="form__label"
                                    >
                                        Кут Висоти (°):
                                    </label>
                                    <Field
                                        id="angleHeight"
                                        name="angleHeight"
                                        type="number"
                                    />
                                    <ErrorMessage
                                        className="error"
                                        name="angleHeight"
                                        component="div"
                                    />
                                </div>
                            </>
                        )}

                        {selectedOption === 'rectangle' && (
                            <>
                                <div className="form__item">
                                    <label
                                        htmlFor="spotWidth"
                                        className="form__label"
                                    >
                                        Ширина Плями (м):
                                    </label>
                                    <Field
                                        id="spotWidth"
                                        name="spotWidth"
                                        type="number"
                                    />
                                    <ErrorMessage
                                        className="error"
                                        name="spotWidth"
                                        component="div"
                                    />
                                </div>
                                <div className="form__item">
                                    <label
                                        htmlFor="spotHeight"
                                        className="form__label"
                                    >
                                        Висота Плями (м):
                                    </label>
                                    <Field
                                        id="spotHeight"
                                        name="spotHeight"
                                        type="number"
                                    />
                                    <ErrorMessage
                                        className="error"
                                        name="spotHeight"
                                        component="div"
                                    />
                                </div>
                            </>
                        )}
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
