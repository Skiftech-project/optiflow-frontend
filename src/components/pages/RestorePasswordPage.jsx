import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';

import { pattern } from 'src/assets';
import { useNotification } from 'src/core/hooks';
import { useUserService } from 'src/core/services';
import { validationSchemaRestorePassword } from 'src/core/shemes';
import { PatternBgStyles } from 'src/styles';

import { Block, Button, ErrorMessage, InputPassword, Notification } from '../ui';

const RestorePasswordPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const { isNotified, showNotification, closeNotification } = useNotification();

    useEffect(() => {
        if (!token) {
            localStorage.removeItem('accessToken');
            navigate('/login');
        }
    }, [token]);

    const { dataLoadingStatus } = useSelector(state => state.restorePassword);
    const { restorePassword } = useUserService();

    const methods = useForm({
        defaultValues: {
            firstNewPassword: '',
            secondNewPassword: '',
        },
        resolver: yupResolver(validationSchemaRestorePassword),
        mode: 'all',
    });

    const { formState, handleSubmit } = methods;

    const handleFormSubmit = async data => {
        if (token) localStorage.setItem('accessToken', token);
        const response = await restorePassword(data.firstNewPassword);

        switch (response?.status) {
            case 401:
                setErrorMessage('Посилання невалідне');
                break;
            default:
                showNotification('info');
                methods.reset();
                setErrorMessage('');
        }
    };

    return (
        <FormProvider {...methods}>
            <Stack
                height="100vh"
                alignItems="center"
                justifyContent="center"
                component="form"
                sx={{ width: '100%', background: `url(${pattern})`, ...PatternBgStyles }}
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                {/* <Header position="fixed" /> */}

                <Block
                    padding="30px"
                    sx={{
                        width: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                    }}
                >
                    <Typography align="center" variant="h6">
                        Введіть новий пароль
                    </Typography>

                    <InputPassword
                        id="firstNewPassword"
                        name="firstNewPassword"
                        label="Новий пароль"
                    />

                    <InputPassword
                        id="secondNewPassword"
                        name="secondNewPassword"
                        label="Підтвердіть новий пароль"
                    />

                    {errorMessage.trim() == 0 ? null : (
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    )}

                    <Stack
                        direction="column"
                        alignItems="start"
                        justifyContent="start"
                        gap={3}
                    >
                        <Button
                            disabled={!formState.isValid}
                            type="submit"
                            color="primary"
                            loading={dataLoadingStatus === 'loading'}
                        >
                            Відправити
                        </Button>
                    </Stack>
                </Block>
            </Stack>
            <Notification
                title="Пароль змінено"
                open={isNotified('info')}
                onClose={closeNotification('info')}
                key="info"
                type="success"
                autoHideDuration={null}
            >
                Ви успішно оновили пароль{' '}
                <Link to="/login">Повернутись на авторизацію</Link>
            </Notification>
        </FormProvider>
    );
};

export default RestorePasswordPage;
