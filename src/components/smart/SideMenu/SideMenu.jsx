import { Formik, Form } from 'formik';
import InputBlock from '../../simple/InputBlock/InputBlock';
import { Button } from 'antd';
import { Select } from 'formik-antd';
import { useState } from 'react';

import './SideMenu.css';

const initialValues = {
    sensitivity: '',
    power: '',
    angleWidth: 1,
    angleHeight: 1,
    minPlumeSize: 0,
    plumeForm: 'rectangle',
    distanceModuleThird: 0,
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
    handleSelectChange,
}) => {
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
                                onChange={handleSelectChange}
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

                        <InputBlock
                            label="Кут Висоти (°):"
                            id="angleHeight"
                            name="angleHeight"
                            type="number"
                        />

                        <InputBlock
                            label="Кут Ширини (°):"
                            id="angleWidth"
                            name="angleWidth"
                            type="number"
                        />

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
