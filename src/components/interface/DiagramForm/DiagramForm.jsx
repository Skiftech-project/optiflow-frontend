/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Divider, Stack, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@mui/material/styles';

import { DragDropZone, Highlighter, Input, InputFile } from 'src/components/ui';
import { validationSchemaDiagram } from 'src/core/shemes';

const DiagramForm = () => {
    const [type, setType] = useState('log');
    const [fileError, setFileError] = useState(null);

    const methods = useForm({ mode: 'all' });
    const theme = useTheme();

    const handleTypeChange = (e, type) => {
        setType(type);
    };
    //TODO: move file logic to custom hook
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
        console.log('Files dropped:', files);
    };
    //TODO: move file logic to custom hook
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
        console.log('File uploaded:', file);
    };

    const { discrette, power, sensitivity } = validationSchemaDiagram;

    const additionalParams =
        type === 'scale' ? (
            <>
                <Input
                    name="discrette"
                    id="discrette"
                    fullWidth
                    label="Дискретність:"
                    adornment="(°)"
                    validation={discrette}
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
                <Input
                    name="sensitivity"
                    id="sensitivity"
                    fullWidth
                    label="Чутливість:"
                    adornment="(мВт/м²)"
                    validation={sensitivity}
                    defaultValue=""
                />
            </>
        ) : (
            <Input
                name="discrette"
                id="discrette"
                fullWidth
                label="Дискретність:"
                adornment="(°)"
                validation={discrette}
                defaultValue=""
            />
        );

    return (
        <FormProvider {...methods}>
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
                    </Stack>

                    <Divider />

                    <Stack gap={2}>
                        <Typography>Оберіть тип діаграми:</Typography>
                        <DiagramTypes type={type} onChange={handleTypeChange} />
                    </Stack>

                    <Stack gap={2}>
                        <Typography>Додаткові параметри:</Typography>
                        {additionalParams}
                    </Stack>
                </Stack>
            </DragDropZone>
        </FormProvider>
    );
};

const DiagramTypes = ({ type, onChange }) => {
    return (
        <ToggleButtonGroup
            value={type}
            exclusive
            onChange={onChange}
            aria-label="diagram type"
            color="primary"
            fullWidth
            size="small"
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
