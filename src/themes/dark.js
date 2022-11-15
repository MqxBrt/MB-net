import { createTheme } from '@mui/material/styles';

const DarkPalette = createTheme({
    palette: {
        common: {
            black: '#000000',
            white: '#ffffff'
        },
        primary: {
            main: '#3D55C4'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.6)'

        },
        background: {
            default: '#3d3d3d',
            paper: '#51505b'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
})

export default DarkPalette;