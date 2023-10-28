// import { useFormik } from 'formik';
import { useState } from 'react';
// import Input from '../../ui/Input/Input';
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
                <form
                    action="#"
                    id="form"
                    className="form__body"
                >
                    <div className="form__item">
                        <label
                            htmlFor="distance"
                            className="form__label"
                        >
                            Відстань (м):
                        </label>
                        <input
                            id="distance"
                            name="distance"
                            type="number"
                        />
                    </div>

                    <div className="form__item">
                        <label
                            htmlFor="sensitivity"
                            className="form__label"
                        >
                            Чутливість (мВт/м²):
                        </label>
                        <input
                            id="sensitivity"
                            name="sensitivity"
                            type="number"
                        />
                    </div>

                    <div className="form__item">
                        <label
                            htmlFor="power"
                            className="form__label"
                        >
                            Потужність (мВт):
                        </label>
                        <input
                            id="power"
                            name="power"
                            type="number"
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
                                <input
                                    id="angleWidth"
                                    name="angleWidth"
                                    type="number"
                                />
                            </div>
                            <div className="form__item">
                                <label
                                    htmlFor="angleHeight"
                                    className="form__label"
                                >
                                    Кут Висоти (°):
                                </label>
                                <input
                                    id="angleHeight"
                                    name="angleHeight"
                                    type="number"
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
                                <input
                                    id="spotWidth"
                                    name="spotWidth"
                                    type="number"
                                />
                            </div>
                            <div className="form__item">
                                <label
                                    htmlFor="spotHeight"
                                    className="form__label"
                                >
                                    Висота Плями (м):
                                </label>
                                <input
                                    id="spotHeight"
                                    name="spotHeight"
                                    type="number"
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
                </form>
            </div>
        </div>
    );
};

export default FirstModule;
