import { Box } from '@mui/material';
import { TitleBlock } from '../ui';
import { FormBlock } from '../interface';

const CalculatorPage = () => {
    return (
        <Box sx={{ marginTop: '70px' }}>
            <TitleBlock block>Калькулятор розсіяння зони випромінювання</TitleBlock>
            <FormBlock />
            <TitleBlock block>Результати обчислень</TitleBlock>
        </Box>
    );
};

export default CalculatorPage;
