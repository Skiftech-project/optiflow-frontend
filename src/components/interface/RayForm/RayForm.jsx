import { FormProvider, useForm } from 'react-hook-form';

import PropTypes from 'prop-types';

import { Box, Divider, Stack, Tab, Tabs, Typography } from '@mui/material';

import { Button, Input, Select } from 'src/components/ui';
import { useOptiflowService } from 'src/core/services';
import { validationSchemaCalc } from 'src/core/shemes';

const selectOptions = [
    { name: 'Еліпс', value: 'ellipse' },
    { name: 'Прямокутник', value: 'rectangle' },
];

const inputStyles = {
    marginBottom: '17px',
};

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ padding: '40px 0 0 0' }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const RayForm = ({ calcOption = 1, toggleCalcOption = null }) => {
    const { calculateData, saveInputValues } = useOptiflowService();
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

    const TempHandleChangeToggleBtn = (event, newValue) => {
        toggleCalcOption(newValue);
    };

    const {
        distance,
        spotHeight,
        spotWidth,
        angleHeight,
        angleWidth,
        sensitivity,
        power,
        minPlumeSize,
        distanceModuleThird,
    } = validationSchemaCalc;

    return (
        <FormProvider {...methods}>
            <Stack component="form">
                <Select
                    name="plumeForm"
                    id="plumeForm"
                    options={selectOptions}
                    label="Оберіть форму перерізу плями:"
                    sx={inputStyles}
                />
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        centered
                        value={calcOption}
                        onChange={TempHandleChangeToggleBtn}
                        aria-label="basic tabs example"
                        sx={{ padding: 0 }}
                    >
                        <Tab label="Розрахунок: пляма" {...a11yProps(0)} />
                        <Tab label="Розрахунок: кути" {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={calcOption} index={0}>
                    {calcOption === 0 ? (
                        <>
                            <Input
                                name="distance"
                                id="distance"
                                fullWidth
                                label="Відстань:"
                                adornment="м"
                                sx={inputStyles}
                                validation={distance}
                                defaultValue=""
                            />
                            <Input
                                name="spotHeight"
                                id="spotHeight"
                                fullWidth
                                label="Висота плями:"
                                adornment="м"
                                sx={inputStyles}
                                validation={spotHeight}
                                defaultValue=""
                            />
                            <Input
                                name="spotWidth"
                                id="spotWidth"
                                fullWidth
                                label="Ширина плями:"
                                adornment="м"
                                validation={spotWidth}
                                defaultValue=""
                            />
                        </>
                    ) : null}
                </CustomTabPanel>

                <CustomTabPanel value={calcOption} index={1}>
                    {calcOption === 1 ? (
                        <>
                            <Input
                                name="angleWidth"
                                id="angleWidth"
                                fullWidth
                                label="Кут ширини:"
                                adornment="(°)"
                                sx={inputStyles}
                                validation={angleWidth}
                                defaultValue=""
                            />
                            <Input
                                name="angleHeight"
                                id="angleHeight"
                                fullWidth
                                label="Кут висоти:"
                                adornment="(°)"
                                sx={inputStyles}
                                validation={angleHeight}
                                defaultValue=""
                            />
                        </>
                    ) : null}
                </CustomTabPanel>

                <Divider sx={{ my: 4 }} />

                <Input
                    name="sensitivity"
                    id="sensitivity"
                    fullWidth
                    label="Чутливість:"
                    adornment="(мВт/м²)"
                    sx={inputStyles}
                    validation={sensitivity}
                    defaultValue=""
                />

                <Input
                    name="power"
                    id="power"
                    fullWidth
                    label="Потужність:"
                    adornment="мВт"
                    validation={power}
                    defaultValue=""
                />
                <Divider sx={{ my: 4 }} />

                <Input
                    name="minPlumeSize"
                    id="minPlumeSize"
                    fullWidth
                    label="Мінімальний розмір плями:"
                    adornment="м"
                    sx={inputStyles}
                    validation={minPlumeSize}
                    defaultValue=""
                />
                <Input
                    name="distanceModuleThird"
                    id="distanceModuleThird"
                    fullWidth
                    label="Дистанція для розрахунку розмірів плями:"
                    adornment="м"
                    validation={distanceModuleThird}
                    defaultValue=""
                />

                <Button
                    fullWidth
                    sx={{ mt: 4 }}
                    onClick={methods.handleSubmit(handleSubmit)}
                    color="primary"
                >
                    Розрахувати
                </Button>
            </Stack>
        </FormProvider>
    );
};

RayForm.propTypes = {
    calcOption: PropTypes.number.isRequired,
    toggleCalcOption: PropTypes.func.isRequired,
};

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default RayForm;
