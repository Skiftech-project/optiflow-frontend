import { useState } from 'react';

import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Grid, Typography } from '@mui/material';

import { Input, Select, TitleBlock } from 'src/components/ui';

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

    const TempHandleChangeToggleBtn = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <section style={{ margin: '15px 0' }}>
            <Grid component="form" container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div style={{ ...block, height: '100%' }}>
                        <TitleBlock sx={{ marginBottom: '25px' }}>
                            геометрія променю
                        </TitleBlock>

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
                                name="distance"
                                type="number"
                                id="distance"
                                fullWidth
                                label="Відстань:"
                                adornment="м"
                                sx={inputStyles}
                            />
                            <Input
                                name="spotHeight"
                                type="number"
                                id="spotHeight"
                                fullWidth
                                label="Висота плями:"
                                adornment="м"
                                sx={inputStyles}
                            />
                            <Input
                                name="spotWidth"
                                type="number"
                                id="spotWidth"
                                fullWidth
                                label="Ширина плями:"
                                adornment="м"
                                sx={inputStyles}
                            />
                        </CustomTabPanel>

                        <CustomTabPanel value={tabValue} index={1}>
                            <Input
                                name="angleWidth"
                                type="number"
                                id="angleWidth"
                                fullWidth
                                label="Кут ширини:"
                                adornment="(°)"
                                sx={inputStyles}
                            />
                            <Input
                                name="angleHeight"
                                type="number"
                                id="angleHeight"
                                fullWidth
                                label="Кут висоти:"
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
                                name="sensitivity"
                                type="number"
                                id="sensitivity"
                                fullWidth
                                label="Чутливість:"
                                adornment="(мВт/м²)"
                                sx={inputStyles}
                            />
                            <Input
                                name="power"
                                type="number"
                                id="power"
                                fullWidth
                                label="Потужність:"
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
                                name="minPlumeSize"
                                type="number"
                                id="minPlumeSize"
                                fullWidth
                                label="Мінімальний розмір плями:"
                                adornment="м"
                                sx={inputStyles}
                            />
                            <Input
                                name="distanceModuleThird"
                                type="number"
                                id="distanceModuleThird"
                                fullWidth
                                label="Дистанція для розрахунку розмірів плями:"
                                adornment="м"
                                sx={inputStyles}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default FormBlock;
