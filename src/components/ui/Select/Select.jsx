import { useState } from 'react';

import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { Input } from 'src/components/ui';

const Select = ({ defaultValue, options = [], ...props }) => {
    const theme = useTheme();
    const [value, setValue] = useState(defaultValue || '');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <Input select theme={theme} value={value} onChange={handleChange} {...props}>
            {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.name}
                </MenuItem>
            ))}
        </Input>
    );
};

Select.propTypes = {
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        }),
    ).isRequired,
};

export default Select;
