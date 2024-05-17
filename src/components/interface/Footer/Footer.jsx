import { Box, Container, Stack, Toolbar } from '@mui/material';

import { Logo, NavLink } from 'src/components/ui';
import { pages } from 'src/core/constants';

const Footer = () => {
    return (
        <Box component="footer" bgcolor="rgba(233,240,251,0.5)" py={{ xs: 4, md: 2 }}>
            <Container maxWidth="xxl">
                <Toolbar
                    disableGutters
                    sx={{
                        gap: { xs: 3, md: 20 },
                        justifyContent: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Logo
                        sx={{ display: 'flex', filter: 'grayscale(1)', opacity: 0.8 }}
                    />
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems="center"
                        gap={{ xs: 2, md: 4 }}
                    >
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
