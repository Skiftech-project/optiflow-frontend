/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Divider, Stack, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@mui/material/styles';

import { Button, DragDropZone, Highlighter, Input, InputFile } from 'src/components/ui';
import { useOptiflowService } from 'src/core/services';

//TODO: rewrite this component
const DiagramForm = ({
    type,
    discrette,
    power,
    sensitivity,
    setDiscrette,
    setPower,
    setType,
    setSensitivity,
}) => {
    const [fileError, setFileError] = useState(null);
    const [file, setFile] = useState(null);

    const { data, dataLoadingStatus } = useSelector(state => state.diagram);
    const { calculateDiagram } = useOptiflowService();

    const theme = useTheme();

    const handleDrop = e => {
        e.preventDefault();
        const files = e.dataTransfer.files;

        if (files.length > 1) {
            setFileError('Завантажити можна тільки один файл !');
            return;
        }

        const file = files[0];

        if (file && file.type !== 'text/csv') {
            setFileError('Тільки файли .csv !');
            return;
        }

        setFileError(null);
        setFile(file);
    };

    const handleFile = e => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        if (file.type !== 'text/csv') {
            setFileError('Тільки файли .csv !');
            return;
        }

        setFileError(null);
        setFile(file);
    };

    const handleSubmit = () => {
        if (!file) {
            setFileError('Файл не завантажено !');
        }
        calculateDiagram(file);
        setFile(null);
    };

    const handleDiscretteChange = e => {
        setDiscrette(e.target.value);
    };

    const handleTypeChange = (e, type) => {
        setType(type);
    };

    const handlePowerChange = e => {
        setPower(e.target.value);
    };

    const handleSensitivityChange = e => {
        setSensitivity(e.target.value);
    };

    const additionalParams =
        type === 'scale' ? (
            <>
                <Input
                    value={power}
                    uncontrolled
                    name="power"
                    id="power"
                    fullWidth
                    label="Потужність:"
                    adornment="мВт"
                    defaultValue=""
                    onChange={handlePowerChange}
                    inputProps={{
                        type: 'number',
                    }}
                />
                <Input
                    value={sensitivity}
                    uncontrolled
                    name="sensitivity"
                    id="sensitivity"
                    fullWidth
                    label="Чутливість:"
                    adornment="(мВт/м²)"
                    defaultValue=""
                    onChange={handleSensitivityChange}
                    inputProps={{
                        type: 'number',
                    }}
                />
            </>
        ) : null;
    return (
        <DragDropZone onDrop={handleDrop}>
            <Stack gap={5}>
                <Stack gap={2}>
                    <Typography>Таблиці відстаней діаграми спрямованості:</Typography>
                    <InputFile
                        variant="outlined"
                        color="primary"
                        inputProps={{ accept: '.csv' }}
                        onChange={handleFile}
                        sx={{ height: 70, borderRadius: '12px' }}
                    >
                        Завантажити файл{' '}
                        <Highlighter color={theme.palette.secondary.main}>
                            .csv
                        </Highlighter>
                    </InputFile>
                    {fileError ? (
                        <Typography color="error">{fileError}</Typography>
                    ) : null}
                    <Button
                        color="primary"
                        fullWidth
                        disabled={!file}
                        loading={dataLoadingStatus === 'loading'}
                        onClick={handleSubmit}
                    >
                        Розрахувати
                    </Button>
                    {!data ? null : (
                        <>
                            <Divider />

                            <Stack gap={2}>
                                <Typography>Оберіть тип діаграми:</Typography>
                                <DiagramTypes type={type} onChange={handleTypeChange} />
                            </Stack>

                            <Stack gap={2}>
                                <Typography>Додаткові параметри:</Typography>
                                <Input
                                    value={discrette}
                                    uncontrolled
                                    name="discrette"
                                    id="discrette"
                                    fullWidth
                                    label="Дискретність:"
                                    adornment="(°)"
                                    defaultValue=""
                                    inputProps={{
                                        step: 1,
                                        min: 1,
                                        max: 180,
                                        type: 'number',
                                    }}
                                    onChange={handleDiscretteChange}
                                />
                                {additionalParams}
                            </Stack>
                        </>
                    )}
                </Stack>
            </Stack>
        </DragDropZone>
    );
};

const DiagramTypes = ({ type, onChange, ...props }) => {
    return (
        <ToggleButtonGroup
            value={type}
            exclusive
            onChange={onChange}
            aria-label="diagram type"
            color="primary"
            fullWidth
            size="small"
            {...props}
        >
            <ToggleButton value="log" aria-label="log model">
                log
            </ToggleButton>
            <ToggleButton value="absolute" aria-label="absolute model">
                absolute
            </ToggleButton>
            <ToggleButton value="scale" aria-label="scale model">
                scale
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default DiagramForm;
