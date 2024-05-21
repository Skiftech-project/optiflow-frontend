import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Container, IconButton, Stack, Tooltip } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';

import { useOptiflowService, useSaveToFileService } from 'src/core/services';
import { validationSchemaCalc } from 'src/core/shemes';

import { FormBlock, Header } from '../interface';
import { Block, Button, Table, TitleBlock } from '../ui';

const CalculatorPage = () => {
    const { calculateData } = useOptiflowService();
    const { saveTableToMarkdownFile } = useSaveToFileService();
    const { calculations, calculationsLoadingStatus } = useSelector(state => state.calc);

    const methods = useForm({
        defaultValues: {
            plumeForm: 'ellipse',
            distance: '',
            spotHeight: '',
            spotWidth: '',
            angleWidth: '',
            angleHeight: '',
            sensitivity: '',
            power: '',
            minPlumeSize: '',
            distanceModuleThird: '',
        },
        resolver: yupResolver(validationSchemaCalc),
        mode: 'all',
    });

    const handleSubmit = data => {
        calculateData(data);
    };

    const tooltipText = !calculations ? null : (
        <span>
            save as <b>.md</b>
        </span>
    );

    return (
        <FormProvider {...methods}>
            <Header />
            <Container maxWidth="xl" component="main">
                <Stack direction="column" spacing={3} my={7}>
                    <TitleBlock block>
                        Калькулятор розсіяння зони випромінювання
                    </TitleBlock>

                    <FormBlock />

                    <TitleBlock block>Результати обчислень</TitleBlock>

                    <Block padding="30px">
                        <Table
                            tableData={calculations}
                            loading={calculationsLoadingStatus === 'loading'}
                            sx={{ marginBottom: 3 }}
                        />

                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Button
                                disabled={!methods.formState.isValid}
                                loading={calculationsLoadingStatus === 'loading'}
                                onClick={methods.handleSubmit(handleSubmit)}
                                color="primary"
                            >
                                Розрахувати
                            </Button>

                            <Tooltip title={tooltipText}>
                                <span>
                                    <IconButton
                                        aria-label="save"
                                        color="primary"
                                        disabled={
                                            !calculations ||
                                            calculationsLoadingStatus === 'loading'
                                        }
                                        onClick={() =>
                                            saveTableToMarkdownFile(calculations)
                                        }
                                    >
                                        <DownloadIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        </Stack>
                    </Block>
                </Stack>
            </Container>
        </FormProvider>
    );
};

export default CalculatorPage;
