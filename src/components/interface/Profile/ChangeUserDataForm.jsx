import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { Button, ErrorMessage, Input, Notification } from 'src/components/ui';
import { useNotification } from 'src/core/hooks';
import { useUserService } from 'src/core/services';
import { validationSchemaUserData } from 'src/core/shemes';
import { transformJwtPayload } from 'src/core/utils';

const ChangeUserDataForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const user = transformJwtPayload(localStorage.getItem('accessToken'));
    const { updateUsernameEmail } = useUserService();
    const { dataLoadingStatus } = useSelector(state => state.userData);
    const { isNotified, showNotification, closeNotification } = useNotification();

    const methods = useForm({
        defaultValues: {
            username: '',
            email: '',
        },
        resolver: yupResolver(validationSchemaUserData),
        mode: 'onChange',
    });

    const { formState, handleSubmit } = methods;

    useEffect(() => {
        methods.setValue('username', user.username);
        methods.setValue('email', user.email);
    }, [methods]);

    const submitButtonHandler = async data => {
        const response = await updateUsernameEmail(data);

        switch (response?.status) {
            case 409:
                setErrorMessage('Користувач з таким Email вже існує');
                break;
            default:
                showNotification('info');
                setErrorMessage('');
        }
    };

    return (
        <FormProvider {...methods}>
            <Stack
                direction="column"
                component="form"
                onSubmit={handleSubmit(submitButtonHandler)}
                gap={3}
            >
                <Typography
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                        fontWeight: 'bold',
                        fontSize: '18px',
                    }}
                >
                    Інформація про користувача
                </Typography>

                <Input
                    name="username"
                    id="username"
                    fullWidth
                    label="Ім'я користувача:"
                    type="string"
                    size="medium"
                    startAdornment={<AccountCircleOutlinedIcon />}
                />

                <Input
                    name="email"
                    id="email"
                    fullWidth
                    label="Пошта користувача:"
                    type="email"
                    size="medium"
                    startAdornment={<EmailOutlinedIcon />}
                />

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
                        Зберегти
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
                Ви успішно оновили дані користувача
            </Notification>
        </FormProvider>
    );
};

export default ChangeUserDataForm;
