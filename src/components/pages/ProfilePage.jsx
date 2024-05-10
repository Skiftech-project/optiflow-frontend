import { Avatar, Box, Container, Stack, Typography } from '@mui/material';

import { transformJwtPayload } from 'src/core/utils';

import { Header, ProfileForm } from '../interface';

const ProfilePage = () => {
    const user = transformJwtPayload(localStorage.getItem('accessToken'));

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
                            src="src\assets\avatar.png"
                        />

                        <Typography
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '48px',
                                marginBottom: '15px',
                            }}
                        >
                            {user.username}
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

                    <ProfileForm />
                </Stack>
            </Container>
        </>
    );
};

export default ProfilePage;
