import { Container, Stack, Typography } from '@mui/material';

import { Header } from '../interface';
import { Button } from '../ui';

const MainPage = () => {
    return (
        <>
            <Header>
                <Button link to="/register">
                    Реєстрація
                </Button>
            </Header>
            <Container maxWidth="xl" component="main">
                <Stack component="section" id="hero">
                    <Typography
                        component="h1"
                        variant="h1"
                        fontWeight={700}
                        align="center"
                        fontSize={60}
                    >
                        Розрахунок області передачі даних
                    </Typography>
                </Stack>
            </Container>
        </>
    );
};

export default MainPage;
