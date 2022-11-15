import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
    AppBar,
    Container,
    Toolbar,
    Box,
    Button,
    IconButton
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import WorkIcon from '@mui/icons-material/Work';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const pages = [
    {
        name: 'Accueil',
        path: '/',
        icon: <HomeIcon />
    },
    {
        name: 'Projets',
        path: '/projects',
        icon: <WorkIcon />
    },
    {
        name: 'CV',
        path: '/resume',
        icon: <ContactPageIcon />
    }
]

export default function NavBar() {

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['mode']);

    const handleChange = () => {
        const newMode = (cookies.mode === 'dark' ? 'light' : 'dark');
        newMode === 'dark' ? setCookie('mode', newMode, { path: '/', maxAge: 31536000 }) : removeCookie('mode', { path: '/' });
    };

    return (
        <AppBar position='sticky' sx={{ backgroundColor: 'primary.main', boxShadow: 5 }}>
            <Container maxWidth='x1'>
                <Toolbar disableGutters>
                    <Box container py={2} spacing={{ xs: 1, sm: 2, mg: 3, ld: 4, xl: 4 }} sx={{ display: 'flex', flexGrow: 1 }}>
                        {pages.map((page) => (
                            <Box item>
                                <Button size='large' startIcon={page.icon} onClick={() => { navigate(page.path) }} sx={{ color: 'common.white', fontWeight: 'bold' }}>
                                    {page.name}
                                </Button>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton size='large' onClick={handleChange}>
                            {cookies.mode === 'dark' ?
                                <DarkModeIcon sx={{ color: 'common.white', backgroundColor: 'background.default', borderRadius: 5, boxShadow: 5, width: 33, height: 33 }} /> :
                                <LightModeIcon sx={{ color: 'common.black', backgroundColor: 'background.default', borderRadius: 5, boxShadow: 5, width: 33, height: 33 }} />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};
