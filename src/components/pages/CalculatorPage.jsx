import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { Container, IconButton, Stack, Tooltip } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';

import { useOptiflowService, useSaveToFileService } from 'src/core/services';

import { FormBlock, Header, SaveTemplateForm } from '../interface';
import { Block, Button, Table, TitleBlock } from '../ui';

const CalculatorPage = () => {
    const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
    const [calcOption, setCalcOption] = useState(0);

    const { calculations, calculationsLoadingStatus } = useSelector(state => state.calc);

    const { calculateData, saveInputValues } = useOptiflowService();
    const { saveTableToMarkdownFile } = useSaveToFileService();

    const methods = useForm({
        defaultValues: {
            plumeForm: 'ellipse',
        },

        mode: 'all',
    });

    const handleSubmit = async data => {
        if (calcOption === 1) {
            delete data.spotWidth;
            delete data.spotHeight;
            delete data.distance;
        } else if (calcOption === 0) {
            delete data.angleWidth;
            delete data.angleHeight;
        }

        let calculatorType = 'звичайний калькулятор';
        const inputValues = { ...data, calculatorType };
        saveInputValues(inputValues);

        calculateData(data);
    };

    const tooltipText = !calculations ? null : (
        <span>
            save as <b>.md</b>
        </span>
    );

    const tableData = [
        { label: 'Геометрія променю', colspan: 2 },
        { label: 'Кут ширини', value: calculations?.angle_width || '-' },
        { label: 'Кут висоти', value: calculations?.angle_height || '-' },
        {
            label: 'Лінійні розміри перерізу області передачі даних на заданій дистанції',
            colspan: 2,
        },
        { label: 'Ширина плями', value: calculations?.plume_width_cut || '-' },
        { label: 'Висота плями', value: calculations?.plume_height_cut || '-' },
        { label: 'Інші розраховані значення', colspan: 2 },
        { label: 'Мінімальна дистанція', value: calculations?.min_distance || '-' },
        {
            label: 'Максимальна гарантована дистанція передачі даних',
            value: calculations?.max_distance || '-',
        },
    ];

    return (
        <FormProvider {...methods}>
            <Header />
            <Container maxWidth="xl" component="main">
                <Stack direction="column" spacing={3} my={7}>
                    <TitleBlock block>
                        Калькулятор розсіяння зони випромінювання
                    </TitleBlock>

                    <FormBlock calcOption={calcOption} toggleCalcOption={setCalcOption} />

                    <TitleBlock block>Результати обчислень</TitleBlock>

                    <Block padding="30px">
                        <Table
                            rowsConfig={tableData}
                            tableData={calculations}
                            loading={calculationsLoadingStatus === 'loading'}
                            sx={{ marginBottom: 7 }}
                        />

                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Stack direction={{ md: 'row' }} alignItems="center" gap={3}>
                                <Button
                                    sx={{ width: '180px' }}
                                    disabled={!methods.formState.isValid}
                                    loading={calculationsLoadingStatus === 'loading'}
                                    onClick={methods.handleSubmit(handleSubmit)}
                                    color="primary"
                                >
                                    Розрахувати
                                </Button>

                                <Button
                                    sx={{ width: '180px' }}
                                    disabled={
                                        !calculations ||
                                        calculationsLoadingStatus === 'loading'
                                    }
                                    onClick={() => {
                                        setIsModalWindowOpen(true);
                                    }}
                                    variant="outlined"
                                    color="primary"
                                >
                                    Зберегти в шаблони
                                </Button>
                            </Stack>

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
            <SaveTemplateForm open={isModalWindowOpen} setOpen={setIsModalWindowOpen} />
        </FormProvider>
    );
};

export default CalculatorPage;
