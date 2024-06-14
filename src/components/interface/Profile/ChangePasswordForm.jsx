import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';

import { Button, ErrorMessage, InputPassword, Notification } from 'src/components/ui';
import { useNotification } from 'src/core/hooks';
import { useUserService } from 'src/core/services';
import { validationSchemaUpdatePassword } from 'src/core/shemes';

const ChangePasswordForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { dataLoadingStatus } = useSelector(state => state.password);
    const { updatePassword } = useUserService();
    const { isNotified, showNotification, closeNotification } = useNotification();

    const methods = useForm({
        defaultValues: {
            newPassword: '',
            oldPassword: '',
        },
        resolver: yupResolver(validationSchemaUpdatePassword),
        mode: 'all',
    });

    const { formState, handleSubmit } = methods;

    const handleFormSubmit = async data => {
        const response = await updatePassword(data);

        switch (response?.status) {
            case 400:
                setErrorMessage('Некоректний старий пароль');
                break;
            default:
                showNotification('info');
                setErrorMessage('');
                methods.reset();
        }
    };

    return (
        <FormProvider {...methods}>
            <Stack component="form" onSubmit={handleSubmit(handleFormSubmit)} gap={3}>
                <Typography
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                        fontWeight: 'bold',
                        fontSize: '18px',
                    }}
                >
                    Пароль
                </Typography>

                <InputPassword
                    id="oldPassword"
                    name="oldPassword"
                    label="Старий пароль"
                />

                <InputPassword id="newPassword" name="newPassword" label="Новий пароль" />

                {errorMessage.trim() == 0 ? null : (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                )}

                <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }}>
                    <Button
                        sx={{ width: '170px' }}
                        disabled={!formState.isValid}
                        type="submit"
                        color="primary"
                        loading={dataLoadingStatus === 'loading'}
                    >
                        Зберегти пароль
                    </Button>
                </Stack>
            </Stack>

            <Notification
                title="Підказка"
                open={isNotified('info')}
                onClose={closeNotification('info')}
                key="info"
                type="success"
            >
                Ви успішно оновили пароль
            </Notification>
        </FormProvider>
    );
};

export default ChangePasswordForm;
