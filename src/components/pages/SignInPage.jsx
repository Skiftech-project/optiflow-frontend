import { TitleBlock, Input, Button } from 'src/components/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthService } from 'src/core/services';
import { useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import { validationShemaLogin } from 'src/core/shemes';

import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignInPage = () => {
    const { login } = useAuthService();
    const { dataLoadingStatus } = useSelector(state => state.auth);

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
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: t =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                    sx={{ padding: '30px' }}
                    alignContent="center"
                >
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: 'secondary.main',
                            left: '50%', // TODO: change code
                            transform: 'translate(-70%, 0)', // TODO: change code
                        }}
                    >
                        <LockOutlinedIcon />
                    </Avatar>

                    <TitleBlock
                        textAlign="center"
                        sx={{
                            textTransform: 'normal',
                            marginBottom: '15px',
                            fontSize: '25px',
                        }}
                    >
                        Увійти
                    </TitleBlock>

                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 1 }}
                    >
                        <Input
                            name="email"
                            id="email"
                            fullWidth
                            label="Пошта користувача:"
                            sx={{ marginBottom: '15px' }}
                            type="email"
                            size="medium"
                        />

                        <Input
                            name="password"
                            id="password"
                            fullWidth
                            label="Пароль користувача:"
                            sx={{ marginBottom: '15px' }}
                            type="password"
                            size="medium"
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Button
                                disabled={!methods.formState.isValid}
                                onClick={methods.handleSubmit(handleSubmit)}
                                color="primary"
                                loading={dataLoadingStatus === 'loading'}
                                sx={{ width: '170px', height: '40px' }}
                            >
                                Увійти
                            </Button>

                            <Link to="/register">Створити акаунт</Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </FormProvider>
    );
};

export default SignInPage;
