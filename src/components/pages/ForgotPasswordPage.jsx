import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { pattern } from 'src/assets';
import { useUserService } from 'src/core/services';
import { validationSchemaEmail } from 'src/core/shemes';
import { PatternBgStyles } from 'src/styles';

import { Header } from '../interface';
import { Block, Button, ErrorMessage, Input, ModalWindow } from '../ui';

const ForgotPasswordPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { dataLoadingStatus } = useSelector(state => state.forgotPassword);
    const { forgotPassword } = useUserService();

    const methods = useForm({
        defaultValues: {
            email: '',
        },
        resolver: yupResolver(validationSchemaEmail),
        mode: 'all',
    });

    const { formState, handleSubmit } = methods;

    const handleFormSubmit = async data => {
        const response = await forgotPassword(data);

        switch (response?.status) {
            case 404:
                setErrorMessage('Користувач з таким Email не зареєстрований');
                break;
            default:
                methods.reset();
                setErrorMessage('');
                setIsModalOpen(true);
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
                <Header position="fixed" />

                <ModalWindow
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Відновлення паролю"
                    content="Перевірте пошту для відновлення пароля, та перейдіть за посиланням"
                >
                    <Button link to="/">
                        Повернутися на головну
                    </Button>
                </ModalWindow>

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
                        Щоб відновити пароль, введіть вашу поштову скриньку
                    </Typography>

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

export default ForgotPasswordPage;
