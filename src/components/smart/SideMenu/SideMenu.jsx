import { Formik, Form } from 'formik';
import InputBlock from '../../simple/InputBlock/InputBlock';
import { Button, Radio } from 'antd';
import { Select } from 'formik-antd';
import { useState } from 'react';

import './SideMenu.css';

const initialValues = {
    distance: '',
    sensitivity: '',
    power: '',
    angleWidth: '',
    angleHeight: '',
    spotWidth: '',
    spotHeight: '',
    plumeForm: 'rectangle',
    minPlumeSize: '',
    distanceModuleThird: '',
};

/*
Додати опції розрахунку: Кути, Пляма
в опції кути поля куту ширини і куту висоти
в опції пляма поля відстані, ширини і висоти плями
Додати ще блок виводу результату розрахунків
*/
const SideMenu = ({
    isOpen,
    onClose,
    handleFormSubmit,
    selectedOption,
    setSelectedOption,
}) => {
    //const [selectedOption, setSelectedOption] = useState('angles');
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <Button
                className="close-button"
                onClick={onClose}
            >
                Close
            </Button>
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
            >
                <Form>
                    <div className="menu__wrapper">
                        <div>
                            <div>Оберіть форму плями:</div>
                            <Select
                                style={{ marginTop: 5 }}
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

                        <div className="radio">
                            <div className="radio__label">
                                Оберіть опцію розрахунку
                            </div>

                            <Radio.Group
                                style={{ marginBottom: 25 }}
                                defaultValue="angles"
                                buttonStyle="solid"
                                size="middle"
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
                                <div className="group">
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
                                </div>
                            )}

                            {selectedOption === 'dimensions' && (
                                <div className="group">
                                    <InputBlock
                                        label="Відстань (м):"
                                        id="distance"
                                        name="distance"
                                        type="number"
                                    />

                                    <InputBlock
                                        label="Ширина Плями (м):"
                                        id="spotWidth"
                                        name="spotWidth"
                                        type="number"
                                    />

                                    <InputBlock
                                        label="Висота Плями (м):"
                                        id="spotHeight"
                                        name="spotHeight"
                                        type="number"
                                    />
                                </div>
                            )}
                        </div>

                        <InputBlock
                            label="Чутливість (мВт/м²):"
                            id="sensitivity"
                            name="sensitivity"
                            type="number"
                        />
                        <InputBlock
                            label="Потужність (мВт):"
                            id="power"
                            name="power"
                            type="number"
                        />

                        <InputBlock
                            label="Мінімальний розмір плями (м):"
                            id="minPlumeSize"
                            name="minPlumeSize"
                            type="number"
                        />

                        <InputBlock
                            label="Дистанція для розрахунку розмірів плями (м):"
                            id="distanceModuleThird"
                            name="distanceModuleThird"
                            type="number"
                        />
                    </div>

                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginTop: 10 }}
                    >
                        Обчислити
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default SideMenu;
