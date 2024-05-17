import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { useUserService } from 'src/core/services';
import { validationSchemaEmail } from 'src/core/shemes';

import { Header } from '../interface';
import { Block, Button, ErrorMessage, Input } from '../ui';

const ForgotPasswordPage = () => {
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
        }
    };

    return (
        <FormProvider {...methods}>
            <Stack
                height="100vh"
                alignItems="center"
                justifyContent="center"
                component="form"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <Header position="fixed" />

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
