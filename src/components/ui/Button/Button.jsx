import './Button.css';
const Button = ({ className, type, text, ...props }) => {
    return (
        <button
            type={type}
            className={className}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
