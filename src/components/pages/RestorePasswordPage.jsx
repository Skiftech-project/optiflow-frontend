import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';

import { useUserService } from 'src/core/services';
import { validationSchemaRestorePassword } from 'src/core/shemes';

// import { Header } from '../interface';
import { Block, Button, ErrorMessage, InputPassword, ModalWindow } from '../ui';

const RestorePasswordPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    useEffect(() => {
        if (!token) {
            localStorage.removeItem('accessToken');
            navigate('/login'); // TODO: add modal window before sign up
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
                methods.reset();
                setErrorMessage('');
        }
    };

    return (
        <FormProvider {...methods}>
            <ModalWindow
                open={isModalOpen}
                title="Пароль успішно було змінено"
                content="Для подальшої роботи, перейдіть на сторінку входу та увійдіть в свій акаунт"
                onClose={() => setIsModalOpen(false)}
            >
                <Button link to="/login">
                    Увійти в акаунт
                </Button>
            </ModalWindow>
            <Stack
                height="100vh"
                alignItems="center"
                justifyContent="center"
                component="form"
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
        </FormProvider>
    );
};

export default RestorePasswordPage;
