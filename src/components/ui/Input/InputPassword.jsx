import { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';

import { IconButton } from '@mui/material';

import { Input } from '..';

const InputPassword = ({
    label = 'Пароль користувача:',
    size = 'medium',
    name = 'password',
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Input
            name={name}
            id="password"
            fullWidth
            label={label}
            type={showPassword ? 'text' : 'password'}
            size={size}
            adornment={
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            }
        />
    );
};

InputPassword.propTypes = {
    label: PropTypes.string,
    size: PropTypes.string,
    name: PropTypes.string,
};

export default InputPassword;
