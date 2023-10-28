// import { useFormik } from 'formik';
import { useState } from 'react';
import Input from '../../ui/Input/Input';
import { Radio } from 'antd';
import { Button } from 'antd';
import './FirstModule.css';

const FirstModule = () => {
    const [selectedOption, setSelectedOption] = useState('ellipse'); // Значение по умолчанию "ellipse"

    // Обработчик изменения выбранной опции
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    // const formik = useFormik({
    //     // это значения которые называются так же как и атрибуты ***name*** у полей формы для хранения данных в хуке.
    //     initialValues: {
    //         distance: 0,
    //         sensitivity: 0,
    //         power: 0,
    //         angleWidth: 0,
    //         angleHeight: 0,
    //     },
    //     //событие которое происходит после отправки формы куда передаются все значения выше в виде обьекта и обрабатываются.
    //     onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
    // });

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
                    <Input
                        className="form__item"
                        text="Відстань (м):"
                        id="distance"
                        name="distance"
                        type="number"
                    />
                    <Input
                        className="form__item"
                        text="Чутливість (Вт/м²):"
                        id="sensitivity"
                        name="sensitivity"
                        type="number"
                    />
                    <Input
                        className="form__item"
                        text="Потужність (Вт):"
                        id="power"
                        name="power"
                        type="number"
                    />
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
                            <Input
                                className="form__item"
                                text="Кут Ширини (°):"
                                id="angleWidth"
                                name="angleWidth"
                                type="number"
                            />
                            <Input
                                className="form__item"
                                text="Кут Висоти (°):"
                                id="angleHeight"
                                name="angleHeight"
                                type="number"
                            />
                        </>
                    )}

                    {selectedOption === 'rectangle' && (
                        <>
                            <Input
                                className="form__item"
                                text="Ширина Плями (м):"
                                id="spotWidth"
                                name="spotWidth"
                                type="number"
                            />
                            <Input
                                className="form__item"
                                text="Висота Плями (м):"
                                id="spotHeight"
                                name="spotHeight"
                                type="number"
                            />
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
