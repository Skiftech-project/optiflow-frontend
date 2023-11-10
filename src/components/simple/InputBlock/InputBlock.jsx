import { useField } from 'formik';
import { ErrorMessage } from 'formik';
import './InputBlock.css';

const InputBlock = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const isError = meta.touched && meta.error;
    let classNames = 'form__input';
    if (isError) {
        classNames += ' errored';
    }

    return (
        <>
            <label
                htmlFor={props.name}
                className="form__label"
            >
                {label}
            </label>
            <input
                {...props}
                {...field}
                className={classNames}
            />
            <ErrorMessage
                className="error"
                component="div"
                {...props}
            />
        </>
    );
};

export default InputBlock;
