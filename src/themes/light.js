import { createTheme } from '@mui/material/styles';

const LightPalette = createTheme({
    palette: {
        common: {
            black: '#000000',
            white: '#ffffff'
        },
        primary: {
            main: '#3D55C4'
        },
        text: {
            primary: '#000000',
            secondary: 'rgba(0,0,0,0.6)'
        },
        background: {
            default: '#f0f0f0',
            paper: '#fdfdfd'
        },
        action: {

        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
})

export default LightPalette;