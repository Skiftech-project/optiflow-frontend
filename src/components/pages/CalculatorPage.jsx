import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { TitleBlock, Button } from '../ui';
import { FormBlock } from '../interface';

const CalculatorPage = () => {
    const methods = useForm({
        defaultValues: {
            plumeForm: 'ellipse',
            distance: 0,
            spotHeight: 0,
            spotWidth: 0,
            angleWidth: 0,
            angleHeight: 0,
            sensitivity: 0,
            power: 0,
            minPlumeSize: 0,
            distanceModuleThird: 0,
        },
    });

    const handleSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <FormProvider {...methods}>
            <Box sx={{ marginTop: '70px' }}>
                <TitleBlock block>Калькулятор розсіяння зони випромінювання</TitleBlock>
                <FormBlock />
                <TitleBlock block>Результати обчислень</TitleBlock>
                <Button onClick={methods.handleSubmit(handleSubmit)} color="primary">
                    submit
                </Button>
            </Box>
        </FormProvider>
    );
};

export default CalculatorPage;
