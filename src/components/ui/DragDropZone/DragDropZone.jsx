import { useState } from 'react';

import PropTypes from 'prop-types';

import { Box, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const zoneStyles = {
    border: '3px dashed',
    borderRadius: '30px',
    height: '100%',
    width: '100%',
};

const DragDropZone = ({ onDrop = null, children }) => {
    const [drag, setDrag] = useState(false);
    const theme = useTheme();

    const dragStartHandler = e => {
        e.preventDefault();
        setDrag(true);
    };

    const dragLeaveHandler = e => {
        e.preventDefault();
        setDrag(false);
    };

    const onDropHandler = e => {
        e.preventDefault();
        if (onDrop) {
            onDrop(e);
        }
        setDrag(false);
    };

    return (
        <>
            {drag ? (
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    onDragStart={e => {
                        dragStartHandler(e);
                    }}
                    onDragLeave={e => {
                        dragLeaveHandler(e);
                    }}
                    onDragOver={e => {
                        dragStartHandler(e);
                    }}
                    onDrop={e => {
                        onDropHandler(e);
                    }}
                    sx={{
                        ...zoneStyles,
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                    }}
                >
                    <Typography variant="h5" align="center" sx={{ opacity: 0.7 }}>
                        Відпустіть файли для завантаження
                    </Typography>
                </Stack>
            ) : (
                <Box
                    onDragStart={e => {
                        dragStartHandler(e);
                    }}
                    onDragLeave={e => {
                        dragLeaveHandler(e);
                    }}
                    onDragOver={e => {
                        dragStartHandler(e);
                    }}
                >
                    {children}
                </Box>
            )}
        </>
    );
};

DragDropZone.propTypes = {
    onDrop: PropTypes.func,
    children: PropTypes.node,
};

export default DragDropZone;
