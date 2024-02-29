import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Input } from 'src/components/ui';

const block = {
    padding: 30,
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.25)',
};

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
    const [sectionShape, setSectionShape] = useState('');
    const [tabValue, setTabValue] = useState(0);

    const TempHandleChangeList = event => {
        setSectionShape(event.target.value);
    };

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

                        <FormControl
                            fullWidth
                            sx={{
                                marginBottom: '15px',
                            }}
                        >
                            <InputLabel id="demo-simple-select-label">
                                Оберіть форму перерізу плями:
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sectionShape}
                                label="Оберіть форму перерізу плями:"
                                onChange={TempHandleChangeList}
                            >
                                <MenuItem value={'ellipse'}>Еліпс</MenuItem>
                                <MenuItem value={'rectangle'}>Прямокутник</MenuItem>
                            </Select>
                        </FormControl>

                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs
                                value={tabValue}
                                onChange={TempHandleChangeToggleBtn}
                                aria-label="basic tabs example"
                            >
                                <Tab label="Розрахунок: пляма" {...a11yProps(0)} />
                                <Tab label="Розрахунок: кути" {...a11yProps(1)} />
                            </Tabs>
                        </Box>

                        <CustomTabPanel value={tabValue} index={0}>
                            <Input fullWidth label="Відстань (м):" sx={inputStyles} />
                            <Input fullWidth label="Висота плями (м):" sx={inputStyles} />
                            <Input fullWidth label="Ширина плями (м):" sx={inputStyles} />
                        </CustomTabPanel>

                        <CustomTabPanel value={tabValue} index={1}>
                            <Input fullWidth label="Кут ширини (°):" sx={inputStyles} />
                            <Input fullWidth label="Кут висоти (°):" sx={inputStyles} />
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
                                label="Чутливість (мВт/м²):"
                                sx={inputStyles}
                            />
                            <Input fullWidth label="Потужність (мВт):" />
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
                                label="Мінімальний розмір плями (м):"
                                sx={inputStyles}
                            />
                            <Input fullWidth label="Дистанція (м):" sx={inputStyles} />
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