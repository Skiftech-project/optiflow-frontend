import { LinearProgress } from '@mui/material';

const BarLoader = () => {
    return (
        <LinearProgress
            sx={{
                height: 3,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
            }}
        />
    );
};

export default BarLoader;
