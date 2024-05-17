import { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';

import { IconButton } from '@mui/material';

import PasswordIcon from '@mui/icons-material/Password';

import { Input } from '..';

const InputPassword = ({
    id = 'password',
    label = 'Пароль користувача:',
    size = 'medium',
    name = 'password',
    disabled = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Input
            name={name}
            id={id}
            fullWidth
            label={label}
            type={showPassword ? 'text' : 'password'}
            size={size}
            disabled={disabled}
            adornment={
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            }
            startAdornment={<PasswordIcon />}
        />
    );
};

InputPassword.propTypes = {
    label: PropTypes.string,
    size: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
};

export default InputPassword;
