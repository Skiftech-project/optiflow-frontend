import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        secondary: {
            light: '#ffecf1',
            main: '#FF585F',
            dark: '#c91e2c',
            contrastText: '#fff',
        },

        primary: {
            light: '#e6eaf5',
            main: '#1e55b3',
            dark: '#00287c',
            contrastText: '#fff',
        },

        error: {
            main: '#FF585F',
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
