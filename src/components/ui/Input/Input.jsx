import { useMemo } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const Input = ({ adornment = null, label = 'Label text', size = 'small', ...props }) => {
    const theme = useTheme();

    const inputProps = useMemo(
        () => ({
            endAdornment: adornment && (
                <InputAdornment position="end">{adornment}</InputAdornment>
            ),
        }),
        [adornment],
    );

    return (
        <View
            theme={theme}
            label={label}
            size={size}
            InputProps={inputProps}
            {...props}
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
    label: PropTypes.string,
    size: PropTypes.string,
    adornment: PropTypes.string,
};

export default Input;
