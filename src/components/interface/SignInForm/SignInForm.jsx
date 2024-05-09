import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Button, Input, InputPassword, Link } from 'src/components/ui';
import { useAuthService } from 'src/core/services';
import { validationShemaLogin } from 'src/core/shemes';

const SignInForm = ({ dataLoadingStatus }) => {
    const { login } = useAuthService();
    const theme = useTheme();

    const methods = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(validationShemaLogin),
        mode: 'all',
    });

    const { formState, handleSubmit } = methods;

    const handleFormSubmit = async data => {
        await login(data.email, data.password);
        methods.reset();
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
                />
                <InputPassword />

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

SignInForm.propTypes = {
    dataLoadingStatus: PropTypes.oneOf(['idle', 'loading', 'error']).isRequired,
};

export default SignInForm;
