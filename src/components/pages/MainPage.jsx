import PropTypes from 'prop-types';

import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Stack,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import LaunchIcon from '@mui/icons-material/Launch';

import { mainPageContent } from 'src/core/constants';

import { Footer, Header } from '../interface';
import { Button } from '../ui';

const MainPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        gap={isMobile ? 5 : 10}
                    >
                        <Typography
                            color="primary"
                            variant="h1"
                            fontWeight={700}
                            align="center"
                            fontSize={{ xs: 40, sm: 50, lg: 80 }}
                        >
                            {mainPageContent.hero.title}
                        </Typography>

                        <Typography
                            component="p"
                            variant={isMobile ? 'body1' : 'h5'}
                            align="center"
                        >
                            {mainPageContent.hero.text}
                        </Typography>
                        <Button
                            size={isMobile ? 'small' : 'large'}
                            to="/calculator"
                            fontSize={isMobile ? null : 18}
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
                py={7}
            >
                <Container maxWidth="xl">
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        gap={isMobile ? 5 : 10}
                    >
                        <Typography
                            color="primary"
                            component="h3"
                            variant={isMobile ? 'h4' : 'h3'}
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
                minHeight="650px"
                alignItems="center"
                justifyContent="center"
                py={7}
            >
                <Container maxWidth="xl">
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        gap={isMobile ? 5 : 10}
                    >
                        <Typography
                            color="primary"
                            component="h3"
                            variant={isMobile ? 'h4' : 'h3'}
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
                                <Box key={logo} width={isMobile ? 170 : null}>
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
                        <Typography
                            align="center"
                            component="p"
                            variant={isMobile ? 'body1' : 'h5'}
                        >
                            {mainPageContent.companies.text}
                        </Typography>
                    </Stack>
                </Container>
            </Stack>

            <Footer />
        </>
    );
};

const CardItem = ({ title, text, picture, link }) => {
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
                <Typography align="center" fontSize={{ lg: 18 }}>
                    {text}
                </Typography>
            </CardContent>

            <CardActions
                disableSpacing
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                }}
            >
                <Button to={link} link fontSize={15} endIcon={<LaunchIcon />}>
                    До сервісу
                </Button>
            </CardActions>
        </Card>
    );
};

CardItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    picture: PropTypes.string,
    link: PropTypes.string,
};

export default MainPage;
