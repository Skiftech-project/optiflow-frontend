import { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { styled } from '@mui/system';
import PropTypes from 'prop-types';

import { InputAdornment, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Input = ({
    name,
    adornment = null,
    startAdornment = null,
    onStartAdornmentClick = null,
    adornmentOnClick = null,
    defaultValue = undefined,
    label = 'Label text',
    size = 'small',
    validation = {},
    uncontrolled = false,
    ...props
}) => {
    const theme = useTheme();
    const {
        formState: { errors },
    } = useFormContext();
    const { required, pattern, maxLength, minLength, validate } = validation;

    const inputProps = useMemo(
        () => ({
            endAdornment: adornment && (
                <InputAdornment position="end" onClick={adornmentOnClick}>
                    {adornment}
                </InputAdornment>
            ),
            startAdornment: startAdornment && (
                <InputAdornment position="start" onClick={onStartAdornmentClick}>
                    {startAdornment}
                </InputAdornment>
            ),
        }),
        [adornment, adornmentOnClick, startAdornment, onStartAdornmentClick],
    );

    const rules = useMemo(
        () => ({
            required: required && "Обов'язкове поле!",
            pattern: pattern && {
                value: pattern.value || pattern,
                message: pattern.message || 'Поле не вірне',
            },
            maxLength: maxLength && {
                value: maxLength.value || maxLength,
                message: maxLength.message || `Поле дуже довге`,
            },
            minLength: minLength && {
                value: minLength.value || minLength,
                message: minLength.message || `Поле дуже коротке`,
            },
            validate: validate || false,
        }),
        [required, pattern, maxLength, minLength, validate],
    );

    return (
        <>
            {uncontrolled ? (
                <View
                    theme={theme}
                    label={label}
                    size={size}
                    InputProps={inputProps}
                    error={!!errors?.[name]}
                    helperText={errors?.[name]?.message || null}
                    {...props}
                />
            ) : (
                <Controller
                    name={name}
                    rules={rules}
                    defaultValue={defaultValue}
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
            )}
        </>
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
    startAdornment: PropTypes.any,
    onStartAdornmentClick: PropTypes.func,
    validation: PropTypes.object,
    defaultValue: PropTypes.any,
    uncontrolled: PropTypes.bool,
};

export default Input;
