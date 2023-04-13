import React from 'react';
import { useCookies } from 'react-cookie';
import { HelmetProvider, Helmet } from "react-helmet-async";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Routes from './routes';
import Header from './pages/layouts/header';
import Footer from './pages/layouts/footer';

import LightTheme from './themes/light';
import DarkTheme from './themes/dark';
import NavBar from './pages/layouts/nav';

export default function App() {
    const [cookies] = useCookies(['mode']);

    return (
        <HelmetProvider>
            <Helmet titleTemplate="%s | MB-net" defaultTitle="MB-net" />
            <ThemeProvider theme={cookies.mode === 'dark' ? DarkTheme : LightTheme}>
                <CssBaseline />
                {/* <Header /> */}
                <NavBar />
                <Routes />
                <Footer />
            </ThemeProvider>
        </HelmetProvider>
    );
}
