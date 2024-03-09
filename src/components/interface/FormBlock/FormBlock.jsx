import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Grid, Typography } from '@mui/material';

import { Button, Input, Select, TitleBlock } from 'src/components/ui';

const block = {
    padding: 30,
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.25)',
};

const inputStyles = {
    marginBottom: '17px',
};

const selectOptions = [
    { name: 'Еліпс', value: 'ellipse' },
    { name: 'Прямокутник', value: 'rectangle' },
];

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

const FormBlock = () => {
    const [tabValue, setTabValue] = useState(0);
    const methods = useForm();

    const TempHandleChangeToggleBtn = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <FormProvider {...methods}>
            <section style={{ margin: '15px 0' }}>
                <Grid
                    component="form"
                    container
                    spacing={2}
                    onSubmit={methods.handleSubmit(handleSubmit)}
                >
                    <Grid item xs={12} md={6}>
                        <div style={{ ...block, height: '100%' }}>
                            <TitleBlock sx={{ marginBottom: '25px' }}>
                                геометрія променю
                            </TitleBlock>

                            <Select
                                fullWidth
                                defaultValue="ellipse"
                                options={selectOptions}
                                label="Оберіть форму перерізу плями:"
                                sx={inputStyles}
                            />

                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs
                                    centered
                                    value={tabValue}
                                    onChange={TempHandleChangeToggleBtn}
                                    aria-label="basic tabs example"
                                    sx={{ padding: 0 }}
                                >
                                    <Tab label="Розрахунок: пляма" {...a11yProps(0)} />
                                    <Tab label="Розрахунок: кути" {...a11yProps(1)} />
                                </Tabs>
                            </Box>

                            <CustomTabPanel value={tabValue} index={0}>
                                <Input
                                    id="distance"
                                    fullWidth
                                    label="Відстань:"
                                    type="number"
                                    adornment="м"
                                    sx={inputStyles}
                                />
                                <Input
                                    id="spotHeight"
                                    fullWidth
                                    label="Висота плями:"
                                    type="number"
                                    adornment="м"
                                    sx={inputStyles}
                                />
                                <Input
                                    id="spotWidth"
                                    fullWidth
                                    label="Ширина плями:"
                                    type="number"
                                    adornment="м"
                                    sx={inputStyles}
                                />
                            </CustomTabPanel>

                            <CustomTabPanel value={tabValue} index={1}>
                                <Input
                                    id="angleWidth"
                                    fullWidth
                                    label="Кут ширини:"
                                    type="number"
                                    adornment="(°)"
                                    sx={inputStyles}
                                />
                                <Input
                                    id="angleHeight"
                                    fullWidth
                                    label="Кут висоти:"
                                    type="number"
                                    adornment="(°)"
                                    sx={inputStyles}
                                />
                            </CustomTabPanel>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} container direction="column" spacing={2}>
                        <Grid item>
                            <div style={block}>
                                <TitleBlock sx={{ marginBottom: '25px' }}>
                                    параметри приймача-випромінювача
                                </TitleBlock>

                                <Input
                                    id="sensitivity"
                                    fullWidth
                                    label="Чутливість:"
                                    type="number"
                                    adornment="(мВт/м²)"
                                    sx={inputStyles}
                                />
                                <Input
                                    id="power"
                                    fullWidth
                                    label="Потужність:"
                                    type="number"
                                    adornment="мВт"
                                />
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={block}>
                                <TitleBlock sx={{ marginBottom: '25px' }}>
                                    додаткові параметри
                                </TitleBlock>

                                <Input
                                    id="minPlumeSize"
                                    fullWidth
                                    label="Мінімальний розмір плями:"
                                    type="number"
                                    adornment="м"
                                    sx={inputStyles}
                                />
                                <Input
                                    id="distanceModuleThird"
                                    fullWidth
                                    label="Дистанція для розрахунку розмірів плями:"
                                    type="number"
                                    adornment="м"
                                    sx={inputStyles}
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Button type="submit" color="primary">
                        submit
                    </Button>
                </Grid>
            </section>
        </FormProvider>
    );
};

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default FormBlock;
