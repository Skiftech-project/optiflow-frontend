import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { Container, IconButton, Stack, Tooltip } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';

import { useOptiflowService, useSaveToFileService } from 'src/core/services';
import { useTemplateService } from 'src/core/services';

import { FormBlock, Header } from '../interface';
import { Block, Button, Input, ModalWindow, Table, TitleBlock } from '../ui';

const CalculatorPage = () => {
    const [isDisabledSaveTemplateBtn, setIsDisabledSaveTemplateBtn] = useState(true);
    const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
    const [currentUserRequest, setCurrentUserRequest] = useState({});
    const { saveTemplate } = useTemplateService();

    const { calculateData } = useOptiflowService();
    const { saveTableToMarkdownFile } = useSaveToFileService();
    const { calculations, calculationsLoadingStatus } = useSelector(state => state.calc);
    const [calcOption, setCalcOption] = useState(0);

    const methods = useForm({
        defaultValues: {
            plumeForm: 'ellipse',
        },

        mode: 'all',
    });

    const templateMethods = useForm({
        defaultValues: {
            templateName: '',
        },
    });

    const handleSubmit = async data => {
        setCurrentUserRequest(data);
        const response = await calculateData(data);
        if (response) setIsDisabledSaveTemplateBtn(false);
    };

    const saveTemplateHandler = data => {
        console.log(data);
        console.log(currentUserRequest);
        console.log(calculations);

        const request = {
            angle_height: currentUserRequest.angleHeight,
            angle_width: currentUserRequest.angleWidth,
            calculator_type: 'calculator',
            distance: currentUserRequest.distance,
            distance_for_plume_size: currentUserRequest.distanceModuleThird,
            max_distance: calculations.max_distance,
            min_distance: calculations.min_distance,
            min_plume_size: currentUserRequest.minPlumeSize,
            plume_form: currentUserRequest.plumeForm,
            plume_height_module3: calculations.plume_height_module3,
            plume_width_module3: calculations.plume_width_module3,
            power: currentUserRequest.power,
            sensitivity: currentUserRequest.sensitivity,
            spot_height: currentUserRequest.spotHeight,
            spot_width: currentUserRequest.spotWidth,
            title: data.templateName,
        };

        saveTemplate(request);
    };

    const tooltipText = !calculations ? null : (
        <span>
            save as <b>.md</b>
        </span>
    );

    return (
        <FormProvider {...methods}>
            <ModalWindow
                open={isModalWindowOpen}
                onClose={() => {
                    setIsModalWindowOpen(false);
                }}
                title="Назвіть ваш шаблон"
            >
                <FormProvider {...templateMethods}>
                    <Stack component="form">
                        <Input
                            name="templateName"
                            id="templateName"
                            fullWidth
                            label="Назва шаблону:"
                            type="string"
                            size="medium"
                            // startAdornment={<AccountCircleOutlinedIcon />}
                        />
                        <Button
                            onClick={templateMethods.handleSubmit(data => {
                                setIsModalWindowOpen(false);
                                saveTemplateHandler(data);
                            })}
                        >
                            Зберегти
                        </Button>
                    </Stack>
                </FormProvider>
            </ModalWindow>

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
                                    disabled={isDisabledSaveTemplateBtn}
                                    onClick={() => {
                                        setIsModalWindowOpen(true);
                                    }}
                                    color="secondary"
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
        </FormProvider>
    );
};

export default CalculatorPage;
