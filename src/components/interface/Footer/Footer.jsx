import { Box, Container, Stack, Toolbar } from '@mui/material';

import { Logo, NavLink } from 'src/components/ui';

const pages = [
    { text: 'Калькулятор', path: '/calculator' },
    { text: 'Візуалізація', path: '/ray' },
];

const Footer = () => {
    return (
        <Box component="footer" bgcolor="rgba(233,240,251,0.5)">
            <Container maxWidth="xxl">
                <Toolbar
                    disableGutters
                    sx={{
                        gap: 20,
                        justifyContent: 'center',
                    }}
                >
                    <Logo
                        sx={{ display: 'flex', filter: 'grayscale(1)', opacity: 0.8 }}
                    />
                    <Stack direction="row" gap={4}>
                        {pages.map(page => (
                            <NavLink key={page.text} to={page.path}>
                                {page.text}
                            </NavLink>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </Box>
    );
};

export default Footer;
