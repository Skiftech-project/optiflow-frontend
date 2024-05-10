import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Button, Input, InputPassword, Link } from 'src/components/ui';
import { useAuthService } from 'src/core/services';
import { validationShemaRegistration } from 'src/core/shemes';

const SignUpForm = () => {
    const { dataLoadingStatus } = useSelector(state => state.auth);
    const { registration } = useAuthService();
    const theme = useTheme();

    const methods = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(validationShemaRegistration),
        mode: 'all',
    });

    const { formState, handleSubmit } = methods;

    const handleFormSubmit = async data => {
        await registration(data.username, data.email, data.password);
        methods.reset();
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
                />

                <Input
                    name="email"
                    id="email"
                    fullWidth
                    label="Пошта користувача:"
                    type="email"
                    size="medium"
                />

                <InputPassword />

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
