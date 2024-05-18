import { useSelector } from 'react-redux';

import { Avatar, Box, Container, Stack, Typography } from '@mui/material';

import { skiftech } from 'src/assets';

import { ChangePasswordForm, ChangeUserDataForm, Header } from '../interface';

const ProfilePage = () => {
    const { data } = useSelector(state => state.userData);

    return (
        <>
            <Header />
            <Container maxWidth="xl" component="main">
                <Stack
                    direction="row"
                    alignItems="center"
                    gap="200px"
                    sx={{ marginTop: '100px' }}
                >
                    <Box
                        sx={{
                            width: '40%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            sx={{ width: '200px', height: '200px', marginBottom: '15px' }}
                            src={skiftech}
                        />

                        <Typography
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '48px',
                                marginBottom: '15px',
                            }}
                        >
                            {data?.username}
                        </Typography>

                        <Typography
                            align="center"
                            sx={{
                                fontWeight: 'light',
                                fontSize: '18px',
                                color: '#6C6C6C',
                            }}
                        >
                            I’m web designer, I work in programs like figma, adobe
                            photoshop, adobe illustrator
                        </Typography>
                    </Box>

                    <Stack width="60%" gap={3}>
                        <ChangeUserDataForm />

                        <ChangePasswordForm />
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};

export default ProfilePage;
