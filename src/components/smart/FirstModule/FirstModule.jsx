import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useState } from 'react';
// import { Radio } from 'antd';
import { Button } from 'antd';
import './FirstModule.css';

const validationSchema = Yup.object({
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
		.when('selectedOption', {
			is: 'ellipse',
			then: Yup.number()
				.required("Це поле є обов'язковим")
				.test(
					'is-more-than-zero',
					'Значення повинно бути більшим або рівним 0',
					(value) => value >= 0,
				),
        }),
    angleHeight: Yup.number()
        .when('selectedOption', {
			is: 'ellipse',
			then: Yup.number()
				.required("Це поле є обов'язковим")
				.test(
					'is-more-than-zero',
					'Значення повинно бути більшим або рівним 0',
					(value) => value >= 0,
				),
        }),
    spotWidth: Yup.number()
		.when('selectedOption', {
			is: 'rectangle',
			then: Yup.number()
				.required("Це поле є обов'язковим")
				.test(
					'is-more-than-zero',
					'Значення повинно бути більшим або рівним 0',
					(value) => value >= 0,
				),
        }),
    spotHeight: Yup.number()
        .required("Це поле є обов'язковим")
        .test(
            'is-more-than-zero',
            'Значення повинно бути більшим або рівним 0',
            (value) => value >= 0,
        ),
});

const initialValues = {
    distance: 0,
    sensitivity: 0,
    power: 0,
    angleWidth: 0,
    angleHeight: 0,
    spotWidth: 0,
    spotHeight: 0,
};

const FirstModule = () => {
    const [selectedOption, setSelectedOption] = useState('ellipse');
	

    const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
    };

    const handleFormSubmit = async (values) => {
		const updatedValues = { ...values };
        try {
			if (selectedOption === 'ellipse'){
				delete updatedValues.spotWidth;
				delete updatedValues.spotHeight;
			}else if(selectedOption === 'rectangle'){
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
        } catch (error) {
            console.error('Произошла ошибка при отправке данных', error);
        }
        console.log(updatedValues);
		
    };

    return (
        <div className="data">
            <div className="form">
                <div className="form__title">
                    Калькулятор розсіяння зони плями
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
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
						
						
						
						{selectedOption === 'ellipse' && (
							<div>
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
							</div>
						)}


						{selectedOption === 'rectangle' && (
                            <div>
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
							</div>
						)}
						
						
						<div className="form__item">
                            <label className="form__label">
                                Выберите опцию:
                            </label>
                            <div className="form__radio">
                                <label>
                                    <Field
                                        type="radio"
                                        name="option"
                                        value="ellipse"
                                        checked={selectedOption === 'ellipse'}
                                        onChange={handleOptionChange}
                                    />
                                    Эллипс
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="option"
                                        value="rectangle"
                                        checked={selectedOption === 'rectangle'}
                                        onChange={handleOptionChange}
                                    />
                                    Прямоугольник
                                </label>
                            </div>
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
        </div>
    );
};

export default FirstModule;