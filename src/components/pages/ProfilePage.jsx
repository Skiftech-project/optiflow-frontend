import { useSelector } from 'react-redux';

import { Avatar, Box, Container, Stack, Typography } from '@mui/material';

import { useUserService } from 'src/core/services';

import { ChangePasswordForm, ChangeUserDataForm, Header } from '../interface';
import { Button } from '../ui';

const ProfilePage = () => {
    const { deleteUser } = useUserService();
    const { data } = useSelector(state => state.userData);
    const { dataLoadingStatus } = useSelector(state => state.deleteUser);

    return (
        <>
            <Header />
            <Container maxWidth="xl" component="main">
                <Stack
                    direction={{ md: 'row' }}
                    alignItems="center"
                    gap={{ xs: '70px', md: '200px' }}
                    my={20}
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
                        />

                        <Typography
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '48px',
                                marginBottom: '15px',
                            }}
                            color="primary"
                        >
                            {data?.username}
                        </Typography>

                        <Typography
                            align="center"
                            sx={{
                                fontWeight: 'light',
                                fontSize: '18px',
                                color: '#6C6C6C',
                                marginBottom: '30px',
                            }}
                        >
                            Звичайний користувач сервісу
                        </Typography>

                        <Button
                            loading={dataLoadingStatus === 'loading'}
                            onClick={() => {
                                deleteUser();
                            }}
                        >
                            Видалити акаунт
                        </Button>
                    </Box>

                    <Stack width="70%" gap={10}>
                        <ChangeUserDataForm />
                        <ChangePasswordForm />
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};

export default ProfilePage;
