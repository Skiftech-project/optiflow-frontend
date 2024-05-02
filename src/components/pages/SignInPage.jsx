import { Block, TitleBlock, Input, Button } from 'src/components/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthService } from 'src/core/services';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import { validationShemaLogin } from 'src/core/shemes';

import { FormStyle } from 'src/styles';

const SignInPage = () => {
    const { login } = useAuthService();
    const { dataLoadingStatus } = useSelector(state => state.login);

    const methods = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(validationShemaLogin),
        mode: 'all',
    });

    const handleSubmit = async data => {
        await login(data.email, data.password);
        methods.reset();
    };

    return (
        <FormProvider {...methods}>
            <form>
                <Block sx={FormStyle}>
                    <TitleBlock
                        textAlign="center"
                        sx={{ textTransform: 'normal', marginBottom: '15px' }}
                    >
                        Увійти
                    </TitleBlock>

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
                            Увійти
                        </Button>

                        <Link to="/register">Створити акаунт</Link>
                    </Box>
                </Block>
            </form>
        </FormProvider>
    );
};

export default SignInPage;
