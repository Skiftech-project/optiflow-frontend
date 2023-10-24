import { useFormik } from 'formik';

import Button from '../../ui/button/button';
import './first-module.css';

const FirstModule = () => {
    const formik = useFormik({
        // это значения которые называются так же как и атрибуты ***name*** у полей формы для хранения данных в хуке.
        initialValues: {
            distance: 0,
            sensitivity: 0,
            power: 0,
            angleWidth: 0,
            angleHeight: 0,
        },
        //событие которое происходит после отправки формы куда передаются все значения выше в виде обьекта и обрабатываются.
        onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
    });

    return (
        <div className="InputData">
            <form
                action="#"
                className="InputData__form"
                onSubmit={formik.handleSubmit}
            >
                <div className="InputData__input">
                    <label htmlFor="distance">Відстань</label>
                    <input
                        name="distance"
                        type="number"
                        placeholder="Відстань"
                        id="distance"
                        value={formik.values.distance}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="InputData__input">
                    <label htmlFor="sensitivity">Чутливість</label>
                    <input
                        name="sensitivity"
                        type="number"
                        placeholder="Чутливість"
                        id="sensitivity"
                        value={formik.values.sensitivity}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="InputData__input">
                    <label htmlFor="power">Потужність</label>
                    <input
                        name="power"
                        type="number"
                        placeholder="Потужність"
                        id="power"
                        value={formik.values.power}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="InputData__input">
                    <label htmlFor="angleWidth">Кутовий розмір ширини</label>
                    <input
                        name="angleWidth"
                        type="number"
                        placeholder="Кутовий розмір ширини"
                        id="angleWidth"
                        value={formik.values.angleWidth}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="InputData__input">
                    <label htmlFor="angleHeight">Кутовий розмір висоти</label>
                    <input
                        name="angleHeight"
                        type="number"
                        placeholder="Кутовий розмір висоти"
                        id="angleHeight"
                        value={formik.values.angleHeight}
                        onChange={formik.handleChange}
                    />
                </div>

                <Button
                    className="InputData_btn"
                    type="submit"
                    text="CALC"
                />
            </form>
        </div>
    );
};

export default FirstModule;
