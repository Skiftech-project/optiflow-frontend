import PropTypes from 'prop-types';

import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';

import { Input, Select, TitleBlock } from 'src/components/ui';
import { Block } from 'src/components/ui';
import { validationSchemaCalc } from 'src/core/shemes';

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

const FormBlock = ({ calcOption, toggleCalcOption }) => {
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

    const TempHandleChangeToggleBtn = newValue => {
        toggleCalcOption(newValue);
    };

    return (
        <section>
            <Grid component="form" container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Block padding="30px" style={{ height: '100%' }}>
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
                                        sx={inputStyles}
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
                    </Block>
                </Grid>

                <Grid item xs={12} md={6} container direction="column" spacing={2}>
                    <Grid item>
                        <Block padding="30px">
                            <TitleBlock sx={{ marginBottom: '25px' }}>
                                параметри приймача-випромінювача
                            </TitleBlock>

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
                        </Block>
                    </Grid>
                    <Grid item>
                        <Block padding="30px">
                            <TitleBlock sx={{ marginBottom: '25px' }}>
                                додаткові параметри
                            </TitleBlock>

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
                                sx={inputStyles}
                                validation={distanceModuleThird}
                                defaultValue=""
                            />
                        </Block>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

FormBlock.propTypes = {
    calcOption: PropTypes.number.isRequired,
    toggleCalcOption: PropTypes.func.isRequired,
};

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default FormBlock;
