import { useState } from 'react';

import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Grid, Typography } from '@mui/material';

import { Input, Select } from 'src/components/ui';

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
                <Box sx={{ p: 3 }}>
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
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div style={{ ...block, height: '100%' }}>
                        <Typography
                            align="center"
                            sx={{
                                color: '#1E55B3',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                fontSize: 21,
                                marginBottom: '25px',
                            }}
                            component="h2"
                        >
                            геометрія променю
                        </Typography>

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
                            >
                                <Tab label="Розрахунок: пляма" {...a11yProps(0)} />
                                <Tab label="Розрахунок: кути" {...a11yProps(1)} />
                            </Tabs>
                        </Box>

                        <CustomTabPanel value={tabValue} index={0}>
                            <Input
                                fullWidth
                                label="Відстань:"
                                type="number"
                                adornment="м"
                                sx={inputStyles}
                            />
                            <Input
                                fullWidth
                                label="Висота плями:"
                                type="number"
                                adornment="м"
                                sx={inputStyles}
                            />
                            <Input
                                fullWidth
                                label="Ширина плями:"
                                type="number"
                                adornment="м"
                                sx={inputStyles}
                            />
                        </CustomTabPanel>

                        <CustomTabPanel value={tabValue} index={1}>
                            <Input
                                fullWidth
                                label="Кут ширини:"
                                type="number"
                                adornment="(°)"
                                sx={inputStyles}
                            />
                            <Input
                                fullWidth
                                label="Кут висоти:"
                                type="number"
                                adornment="(°)"
                                sx={inputStyles}
                            />
                        </CustomTabPanel>
                    </div>
                </Grid>

                <Grid item xs={6} container direction="column" spacing={2}>
                    <Grid item>
                        <div style={block}>
                            <Typography
                                align="center"
                                sx={{
                                    color: '#1E55B3',
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold',
                                    fontSize: 21,
                                    marginBottom: '25px',
                                }}
                                component="h2"
                            >
                                параметри приймача-випромінювача
                            </Typography>

                            <Input
                                fullWidth
                                label="Чутливість:"
                                type="number"
                                adornment="(мВт/м²)"
                                sx={inputStyles}
                            />
                            <Input
                                fullWidth
                                label="Потужність:"
                                type="number"
                                adornment="мВт"
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={block}>
                            <Typography
                                align="center"
                                sx={{
                                    color: '#1E55B3',
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold',
                                    fontSize: 21,
                                    marginBottom: '25px',
                                }}
                                component="h2"
                            >
                                додаткові параметри
                            </Typography>

                            <Input
                                fullWidth
                                label="Мінімальний розмір плями:"
                                type="number"
                                adornment="м"
                                sx={inputStyles}
                            />
                            <Input
                                fullWidth
                                label="Дистанція:"
                                type="number"
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
