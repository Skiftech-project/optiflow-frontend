import { useField } from 'formik';
import { ErrorMessage } from 'formik';
import './InputBlock.css';

const InputBlock = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <div className="form__item">
            <label
                htmlFor={props.name}
                className="form__label"
            >
                {label}
            </label>
            <input
                {...props}
                {...field}
            />
            <ErrorMessage
                className="error"
                component="div"
                {...props}
            />
        </div>
    );
};

export default InputBlock;
