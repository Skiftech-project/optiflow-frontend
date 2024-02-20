import { Box } from '@mui/material';
import { TitleBlock } from '../ui';
import { FormBlock } from '../interface';

const CalculatorPage = () => {
    return (
        <Box sx={{ marginTop: '70px' }}>
            <TitleBlock title="Калькулятор розсіяння зони випромінювання" />

            <FormBlock />

            <TitleBlock title="результати обчислень" />
        </Box>
    );
};

export default CalculatorPage;
