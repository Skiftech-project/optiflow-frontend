import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { Button, ErrorMessage, Input, InputPassword, Link } from 'src/components/ui';
import { useAuthService } from 'src/core/services';
import { validationSchemaRegistration } from 'src/core/shemes';

const SignUpForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { dataLoadingStatus } = useSelector(state => state.auth);
    const { registration } = useAuthService();
    const theme = useTheme();

    const methods = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(validationSchemaRegistration),
        mode: 'all',
    });

    const { formState, handleSubmit } = methods;

    const handleFormSubmit = async data => {
        const response = await registration(data.username, data.email, data.password);

        switch (response?.status) {
            case 409:
                setErrorMessage('Користувач з таким Email вже існує');
                break;
            case 400:
                setErrorMessage('Ваш Email не коректний');
                break;
            default:
                methods.reset();
        }
    };

    return (
        <FormProvider {...methods}>
            <Stack component="form" onSubmit={handleSubmit(handleFormSubmit)} gap={3}>
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

                <InputPassword />

                {errorMessage.trim() == 0 ? null : (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                )}

                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={3}
                >
                    <Typography align="center">
                        Вже працюєте з нами?&nbsp;
                        <Link
                            to="/login"
                            underline="always"
                            sx={{ color: theme.palette.primary.main }}
                        >
                            Увійти.
                        </Link>
                    </Typography>
                    <Button
                        disabled={!formState.isValid}
                        type="submit"
                        color="primary"
                        loading={dataLoadingStatus === 'loading'}
                        sx={{ width: '170px', height: '40px' }}
                    >
                        Зареєструватися
                    </Button>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default SignUpForm;
