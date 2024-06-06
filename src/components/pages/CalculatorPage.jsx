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
                            tableData={calculations}
                            loading={calculationsLoadingStatus === 'loading'}
                            sx={{ marginBottom: 3 }}
                        />

                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Stack direction="row" alignItems="center" gap={3}>
                                <Button
                                    disabled={!methods.formState.isValid}
                                    loading={calculationsLoadingStatus === 'loading'}
                                    onClick={methods.handleSubmit(handleSubmit)}
                                    color="primary"
                                >
                                    Розрахувати
                                </Button>

                                <Button
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
