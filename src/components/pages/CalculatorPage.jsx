import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { IconButton, Stack, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import { TitleBlock, Button, Block, Table } from '../ui';
import { FormBlock } from '../interface';
import { saveToMarkdownFile } from 'src/core/utils';
import { useOptiflowService } from 'src/core/services';
import { validationSchemaCalc } from 'src/core/shemes';

const CalculatorPage = () => {
    const [data, setData] = useState(null);

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
    const { calculateData } = useOptiflowService();

    const handleSubmit = data => {
        setData(calculateData(data));
    };

    const tooltipText = !data ? null : (
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
                    <Table tableData={data} />

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button
                            disabled={!methods.formState.isValid}
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
                                    disabled={!data}
                                    onClick={() => saveToMarkdownFile(data)}
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
