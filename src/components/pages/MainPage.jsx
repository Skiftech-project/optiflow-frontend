import PropTypes from 'prop-types';

import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Stack,
    Typography,
} from '@mui/material';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { mainPageContent } from 'src/core/constants';

import { Footer, Header } from '../interface';
import { Button } from '../ui';

const MainPage = () => {
    return (
        <>
            <Header position="fixed">
                <Button link to="/register">
                    Реєстрація
                </Button>
            </Header>

            <Stack
                component="section"
                id="hero"
                height="100vh"
                marginTop="64px"
                alignItems="center"
                justifyContent="center"
            >
                <Container maxWidth="xl">
                    <Stack alignItems="center" justifyContent="center" gap={10}>
                        <Typography
                            color="primary"
                            variant="h1"
                            fontWeight={700}
                            align="center"
                            fontSize={60}
                        >
                            {mainPageContent.hero.title}
                        </Typography>

                        <Typography component="p" variant="h5" align="center">
                            {mainPageContent.hero.text}
                        </Typography>
                        <Button
                            size="large"
                            to="/register"
                            link
                            endIcon={<DoubleArrowIcon />}
                        >
                            Спробувати
                        </Button>
                    </Stack>
                </Container>
            </Stack>

            <Stack
                component="section"
                id="advantages"
                minHeight="800px"
                bgcolor="rgba(233,240,251,0.5)"
                alignItems="center"
                justifyContent="center"
            >
                <Container maxWidth="xl">
                    <Stack alignItems="center" justifyContent="center" gap={10}>
                        <Typography
                            color="primary"
                            variant="h3"
                            fontWeight={700}
                            align="center"
                        >
                            {mainPageContent.advantages.title}
                        </Typography>
                        <Stack
                            direction="row"
                            gap={5}
                            flexWrap="wrap"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {mainPageContent.advantages.cards.map(card => (
                                <CardItem key={card.title} {...card} />
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </Stack>

            <Stack
                component="section"
                id="companies"
                minHeight="800px"
                alignItems="center"
                justifyContent="center"
            >
                <Container maxWidth="xl">
                    <Stack alignItems="center" justifyContent="center" gap={10}>
                        <Typography
                            color="primary"
                            variant="h3"
                            fontWeight={700}
                            align="center"
                        >
                            {mainPageContent.companies.title}
                        </Typography>
                        <Stack
                            direction="row"
                            gap={5}
                            flexWrap="wrap"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {mainPageContent.companies.logos.map(logo => (
                                <Box key={logo}>
                                    <img
                                        src={logo}
                                        alt={logo}
                                        width="100%"
                                        height="100%"
                                        style={{ borderRadius: '20px' }}
                                    />
                                </Box>
                            ))}
                        </Stack>
                        <Typography align="center" variant="h5" component="p">
                            {mainPageContent.companies.text}
                        </Typography>
                    </Stack>
                </Container>
            </Stack>

            <Footer />
        </>
    );
};

const CardItem = ({ title, text, picture }) => {
    return (
        <Card sx={{ minHeight: 470, maxWidth: 420, borderRadius: '15px' }}>
            <CardMedia
                component="img"
                sx={{
                    height: 250,
                    borderBottom: '1px solid',
                    borderColor: 'secondary.main',
                }}
                image={picture}
                title="green iguana"
            />
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: 0,
                }}
            >
                <Typography
                    color="primary"
                    my={3}
                    variant="h6"
                    align="center"
                    fontWeight={700}
                >
                    {title}
                </Typography>
                <Typography align="center" fontSize={18}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

CardItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    picture: PropTypes.string,
};

export default MainPage;
