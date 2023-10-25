// import { useFormik } from 'formik';
import Input from '../../ui/Input/Input';
import { Radio } from 'antd';
import './FirstModule.css';

const FirstModule = () => {
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
                        id="distance"
                        name="distance"
                        type="number"
                    />
                    <Input
                        className="form__item"
                        text="Потужність (Вт):"
                        id="distance"
                        name="distance"
                        type="number"
                    />
                    <Radio.Group
                        buttonStyle="solid"
                        className="form__select"
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
                </form>
            </div>
        </div>
    );
};

export default FirstModule;
