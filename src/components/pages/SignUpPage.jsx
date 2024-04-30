import { Block, TitleBlock, Input, Button } from 'src/components/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthService } from 'src/core/services';

import { validationShemaRegistration } from 'src/core/shemes';

import { FormStyle } from 'src/styles';
import { useSelector } from 'react-redux';

const SignUpPage = () => {
    const { dataLoadingStatus } = useSelector(state => state.signup);
    const { registration } = useAuthService();

    const methods = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(validationShemaRegistration),
        mode: 'all',
    });

    const handleSubmit = data => {
        registration(data.username, data.email, data.password);
    };

    return (
        <FormProvider {...methods}>
            <form>
                <Block sx={FormStyle}>
                    <TitleBlock
                        textAlign="center"
                        sx={{ textTransform: 'normal', marginBottom: '15px' }}
                    >
                        Зареєструватися
                    </TitleBlock>

                    <Input
                        name="username"
                        id="username"
                        fullWidth
                        label="Ім'я користувача:"
                        sx={{ marginBottom: '15px' }}
                    />

                    <Input
                        name="email"
                        id="email"
                        fullWidth
                        label="Пошта користувача:"
                        sx={{ marginBottom: '15px' }}
                        type="email"
                    />

                    <Input
                        name="password"
                        id="password"
                        fullWidth
                        label="Пароль користувача:"
                        sx={{ marginBottom: '15px' }}
                        type="password"
                    />

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <Button
                            disabled={!methods.formState.isValid}
                            onClick={methods.handleSubmit(handleSubmit)}
                            color="primary"
                            loading={dataLoadingStatus === 'loading'}
                        >
                            Зареєструватися
                        </Button>

                        <Link to="/sign-in">Акаунт вже існує?</Link>
                    </Box>
                </Block>
            </form>
        </FormProvider>
    );
};

export default SignUpPage;
