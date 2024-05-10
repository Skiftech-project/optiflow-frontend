import { Avatar, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { pattern } from 'src/assets';
import { Block, Button, TitleBlock } from 'src/components/ui';

import { Header, SignUpForm } from '../interface';

const SignUpPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Header position="fixed">
                <Button link to="/login" sx={{ width: '105px' }}>
                    Вхід
                </Button>
            </Header>
            <Grid
                container
                spacing={0}
                component="main"
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    minHeight: '100vh',
                    backgroundImage: isMobile ? `url(${pattern})` : 'none',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: theme.palette.white,
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
                            <PersonOutlineOutlinedIcon />
                        </Avatar>

                        <TitleBlock
                            sx={{
                                textTransform: 'normal',
                                fontSize: '25px',
                            }}
                        >
                            Реєстрація
                        </TitleBlock>
                        <Typography maxWidth={isMobile ? '80%' : null} align="center">
                            Зареєструйтеся та співпрацюйте з нами вже зараз!
                        </Typography>
                    </Stack>

                    <SignUpForm />
                </Grid>
            </Grid>
        </>
    );
};

export default SignUpPage;
