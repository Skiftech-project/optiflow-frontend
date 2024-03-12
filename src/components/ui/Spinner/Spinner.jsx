import { CircleLoader } from 'react-spinners';
import { useTheme } from '@mui/material/styles';

const style = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
};

const Spinner = () => {
    const theme = useTheme();

    return (
        <CircleLoader size={100} color={theme.palette.primary.dark} cssOverride={style} />
    );
};

export default Spinner;
