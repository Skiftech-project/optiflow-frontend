import { Grid } from '@mui/material';

import { Button } from 'src/components/ui';

import './NotFoundPage.css';

const btnStyles = {
    padding: '20px 25px',
    fontSize: { sm: '1rem', lg: '1.2rem' },
    // position: 'absolute',
    // top: '700px',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // zIndex: 5,
    // bottom: 0,
};

const NotFoundPage = () => {
    return (
        <div className="page">
            <div className="top-header"></div>

            <div className="lamp__wrap">
                <div className="lamp">
                    <div className="cable"></div>
                    <div className="cover"></div>
                    <div className="in-cover">
                        <div className="bulb"></div>
                    </div>
                    <div className="light"></div>
                </div>
            </div>

            <Grid
                container
                spacing={0}
                gap={5}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}
            >
                <section className="error">
                    <div className="message">
                        <h2 className="message__title">404 Not Found</h2>
                        <h3 className="message_subtitle">
                            На жаль ,сторінку, яку ви шукали, не знайдено
                        </h3>
                        <p className="message__text">
                            Посилання, за яким ви перейшли, може бути непрацюючим або
                            більше не існує. Будь-ласка, спробуйте ще раз або перейдіть на
                            головну сторінку.
                        </p>
                    </div>
                </section>
                <Button link to="/" sx={btnStyles}>
                    Повернутися до головної
                </Button>
            </Grid>
        </div>
    );
};

export default NotFoundPage;
