import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { Button } from 'src/components/ui';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const InputFile = ({ inputProps = {}, onChange = null, children, ...props }) => {
    return (
        <Button
            component="label"
            role={undefined}
            fullWidth
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ height: '100%' }}
            {...props}
        >
            {children}
            <VisuallyHiddenInput type="file" {...inputProps} onChange={onChange} />
        </Button>
    );
};

InputFile.propTypes = {
    inputProps: PropTypes.object,
    children: PropTypes.node,
    onChange: PropTypes.func,
};

export default InputFile;
