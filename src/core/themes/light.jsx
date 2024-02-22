import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        secondary: {
            light: '#ffecf1',
            main: '#ff5860',
            dark: '#c91e2c',
            contrastText: '#000',
        },

        primary: {
            light: '#e6eaf5',
            main: '#1e55b3',
            dark: '#00287c',
            contrastText: '#fff',
        },

        error: {
            main: '#ff5860',
        },

        success: {
            main: '#44FF33',
        },

        white: {
            main: '#ffffff',
        },

        black: {
            main: '#000',
        },
    },
});

export default theme;
