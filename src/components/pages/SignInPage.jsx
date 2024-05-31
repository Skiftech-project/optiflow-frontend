import { Avatar, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import LockOpenIcon from '@mui/icons-material/LockOpen';

import { pattern } from 'src/assets';
import { Block, Button, TitleBlock } from 'src/components/ui';
import { PatternBgStyles } from 'src/styles';

import { Header, SignInForm } from '../interface';

const SignInPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Header position="fixed">
                <Button link to="/register" sx={{ width: '105px' }}>
                    Реєстрація
                </Button>
            </Header>
            <Grid
                container
                component="main"
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    minHeight: '100vh',
                    backgroundImage: isMobile ? `url(${pattern})` : 'none',
                    backgroundColor: theme.palette.white,
                    ...PatternBgStyles,
                }}
            >
                <Grid
                    item
                    component={isMobile ? Block : 'div'}
                    elevation={5}
                    padding={{ xs: 2, sm: 5 }}
                    width={{ sm: 500 }}
                >
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                        marginBottom={3}
                    >
                        <Avatar alt="lock-icon" sx={{ bgcolor: 'secondary.main' }}>
                            <LockOpenIcon />
                        </Avatar>

                        <TitleBlock
                            sx={{
                                textTransform: 'normal',
                                fontSize: '25px',
                            }}
                        >
                            Увійти
                        </TitleBlock>
                        <Typography maxWidth={isMobile ? '80%' : null} align="center">
                            Вже маєте акаунт? Введіть свої дані для входу, щоб отримати
                            доступ до сервісу.
                        </Typography>
                    </Stack>

                    <SignInForm />
                </Grid>
            </Grid>
        </>
    );
};

export default SignInPage;
