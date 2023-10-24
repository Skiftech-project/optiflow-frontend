const input = ({ name, type, ...props }) => {
    return (
        <input
            name={name}
            type={type}
            {...props}
        ></input>
    );
};

export default input;
