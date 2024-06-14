import { LinearProgress } from '@mui/material';

import { Portal } from 'src/components/common';

const BarLoader = () => {
    return (
        <Portal rootId="header">
            <LinearProgress
                sx={{
                    height: 3,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                }}
            />
        </Portal>
    );
};

export default BarLoader;
