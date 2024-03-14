import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { FormControl, Select as MuiSelect, InputLabel, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const Select = ({
    name,
    variant = 'outlined',
    label = 'default',
    id = 'default',
    options = [],
    ...props
}) => {
    const labelId = `${id}-label`;

    return (
        <FormControl fullWidth>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Controller
                name={name}
                render={({ field }) => (
                    <View
                        size="small"
                        labelId={labelId}
                        id={id}
                        label={label}
                        variant={variant}
                        {...field}
                        {...props}
                    >
                        {options.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </View>
                )}
            />
        </FormControl>
    );
};

const View = styled(MuiSelect)(() => ({
    borderRadius: '7px',
}));

Select.propTypes = {
    name: PropTypes.string.isRequired,
    variant: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default Select;
