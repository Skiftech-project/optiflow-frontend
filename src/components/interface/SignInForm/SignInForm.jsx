import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { Button, ErrorMessage, Input, InputPassword, Link } from 'src/components/ui';
import { useAuthService } from 'src/core/services';
import { validationSchemaLogin } from 'src/core/shemes';

const SignInForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { dataLoadingStatus } = useSelector(state => state.auth);
    const { login } = useAuthService();
    const theme = useTheme();

    const methods = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(validationSchemaLogin),
        mode: 'all',
    });

    const { formState, handleSubmit } = methods;

    const handleFormSubmit = async data => {
        const response = await login(data.email, data.password);

        switch (response?.status) {
            case 404:
                setErrorMessage('Користувач з таким Email не зареєстрований');
                break;
            case 400:
                setErrorMessage('Некоректний пароль');
                break;
            default:
                methods.reset();
        }
    };

    return (
        <FormProvider {...methods}>
            <Stack component="form" onSubmit={handleSubmit(handleFormSubmit)} gap={3}>
                <Input
                    name="email"
                    id="email"
                    fullWidth
                    label="Пошта користувача:"
                    type="email"
                    size="medium"
                    startAdornment={<EmailOutlinedIcon />}
                />
                <InputPassword />

                {errorMessage.trim() == 0 ? null : (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                )}

                <Link
                    to="/login/forgotPassword"
                    underline="always"
                    align="center"
                    sx={{ color: theme.palette.primary.main }}
                >
                    Забули пароль?
                </Link>

                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={3}
                >
                    <Typography align="center">
                        Не маєте аккаунт?&nbsp;
                        <Link
                            to="/register"
                            underline="always"
                            sx={{ color: theme.palette.primary.main }}
                        >
                            Зареєструватися.
                        </Link>
                    </Typography>
                    <Button
                        disabled={!formState.isValid}
                        type="submit"
                        color="primary"
                        loading={dataLoadingStatus === 'loading'}
                        sx={{ width: '170px', height: '40px' }}
                    >
                        Увійти
                    </Button>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default SignInForm;
