import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { IconButton, Stack, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import { TitleBlock, Button, Block, Table } from '../ui';
import { FormBlock } from '../interface';
import { useOptiflowService, useSaveToFileService } from 'src/core/services';
import { validationSchemaCalc } from 'src/core/shemes';

// !FIX: two 2d request outgoing from this component on first render after calculations button is clicked
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
            <Stack
                sx={{ marginTop: '70px', marginBottom: '70px' }}
                direction="column"
                spacing={3}
            >
                <TitleBlock block>Калькулятор розсіяння зони випромінювання</TitleBlock>
                <FormBlock />
                <TitleBlock block>Результати обчислень</TitleBlock>

                <Block padding="30px">
                    <Table tableData={calculations} />

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
                                    onClick={() => saveTableToMarkdownFile(calculations)}
                                >
                                    <DownloadIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    </Stack>
                </Block>
            </Stack>
        </FormProvider>
    );
};

export default CalculatorPage;
