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
                className="InputData_form"
                onSubmit={formik.handleSubmit}
            >
                <input
                    name="distance"
                    type="number"
                    placeholder="Відстань"
                    value={formik.values.distance}
                    onChange={formik.handleChange}
                />
                <input
                    name="sensitivity"
                    type="number"
                    placeholder="Чутливість"
                    value={formik.values.sensitivity}
                    onChange={formik.handleChange}
                />
                <input
                    name="power"
                    type="number"
                    placeholder="Потужність"
                    value={formik.values.power}
                    onChange={formik.handleChange}
                />
                <input
                    name="angleWidth"
                    type="number"
                    placeholder="Кутовий розмір ширини"
                    value={formik.values.angleWidth}
                    onChange={formik.handleChange}
                />
                <input
                    name="angleHeight"
                    type="number"
                    placeholder="Кутовий розмір висоти"
                    value={formik.values.angleHeight}
                    onChange={formik.handleChange}
                />

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
