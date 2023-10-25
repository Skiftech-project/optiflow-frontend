import { InputNumber } from 'antd';
import './Input.css';
const Input = ({ text, name, id, type, className, ...props }) => {
    const propsClass = `item ${className || ''}`;
    return (
        <div className={propsClass}>
            <label
                htmlFor={id}
                className="item__label"
            >
                {text}
            </label>
            <InputNumber
                id={id}
                type={type}
                name={name}
                className="item__input"
                {...props}
            />
        </div>
    );
};

export default Input;
