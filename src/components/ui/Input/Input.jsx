import { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { styled } from '@mui/system';
import PropTypes from 'prop-types';

import { InputAdornment, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Input = ({
    name,
    adornment = null,
    adornmentOnClick = null,
    label = 'Label text',
    size = 'small',
    ...props
}) => {
    const theme = useTheme();
    const {
        formState: { errors },
    } = useFormContext();

    const inputProps = useMemo(
        () => ({
            endAdornment: adornment && (
                <InputAdornment position="end" onClick={adornmentOnClick}>
                    {adornment}
                </InputAdornment>
            ),
        }),
        [adornment, adornmentOnClick],
    );

    return (
        <Controller
            name={name}
            render={({ field }) => (
                <View
                    theme={theme}
                    label={label}
                    size={size}
                    InputProps={inputProps}
                    error={!!errors?.[name]}
                    helperText={errors?.[name]?.message || null}
                    {...field}
                    {...props}
                />
            )}
        />
    );
};

const View = styled(TextField)(({ theme }) => ({
    '& label.Mui-focused': {
        color: theme.palette.black.main,
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: '7px',
            borderColor: 'rgba(0, 0, 0, 0.302)',
            borderBottom: `2px solid`,
            transition: '0.5s border ease-in-out',
        },
        '&:hover fieldset': {
            borderColor: theme.palette.black.main,
        },
        '&.Mui-focused fieldset': {
            border: '1px solid',
            borderBottom: '2px solid',
            borderBottomColor: theme.palette.primary.main,
        },
        '&.Mui-error fieldset': {
            // Добавляем стили для состояния ошибки
            borderColor: 'rgba(0, 0, 0, 0.302)',
            borderBottom: '2px solid',
            borderBottomColor: theme.palette.error.main,
        },
    },
}));

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    size: PropTypes.string,
    adornment: PropTypes.any,
    adornmentOnClick: PropTypes.func,
};

export default Input;
