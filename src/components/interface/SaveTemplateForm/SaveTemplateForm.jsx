import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { DescriptionOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import CalculateIcon from '@mui/icons-material/Calculate';

import { Button, Input, ModalWindow } from 'src/components/ui';
import { useTemplateService } from 'src/core/services';

const SaveTemplateForm = ({ open, setOpen }) => {
    const outputValues = useSelector(state => state.calc.calculations);
    const inputValues = useSelector(state => state.calcValues.calcValues);

    const { saveTemplate } = useTemplateService();

    const methods = useForm({
        defaultValues: {
            templateName: 'Шаблон',
        },
    });

    const handleSubmit = data => {
        saveTemplate(data.templateName, inputValues, outputValues);
    };

    return (
        <ModalWindow
            open={open}
            onClose={() => {
                setOpen(false);
            }}
            title="Назва вашого шаблону"
            width="500"
            icon={<CalculateIcon fontSize="medium" />}
        >
            <FormProvider {...methods}>
                <Stack
                    alignItems="center"
                    gap={3}
                    component="form"
                    sx={{ width: '100%' }}
                >
                    <Input
                        name="templateName"
                        id="templateName"
                        fullWidth
                        label="Назва шаблону:"
                        type="string"
                        size="medium"
                        sx={{ marginBottom: '20px' }}
                        startAdornment={
                            <DescriptionOutlined color="black" fontSize="small" />
                        }
                    />
                    <Button
                        sx={{ width: '180px' }}
                        fontSize={16}
                        onClick={methods.handleSubmit(data => {
                            handleSubmit(data);
                            setOpen(false);
                        })}
                    >
                        Зберегти
                    </Button>
                </Stack>
            </FormProvider>
        </ModalWindow>
    );
};

SaveTemplateForm.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default SaveTemplateForm;
