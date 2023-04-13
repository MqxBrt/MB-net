import React from 'react';
import { Helmet } from "react-helmet-async";
import {
    Typography,
    Breadcrumbs,
    Link,
    Box,
    Alert,
    Stack
} from '@mui/material';
import styled from "@emotion/styled";

export default function MainPage() {
    const Root = styled.div`
    max-width: 700px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    min-height: 100%;
    flex-direction: column;
    `;
    return (
        <>
            <Helmet>
                <title>Accueil</title>
            </Helmet>
            <Breadcrumbs pt={4} pb={3} pl={3} pr={4} aria-label='breadcrumb' separator='|' sx={{ typography: 'h6' }}>
                <Link
                    underline='hover'
                    color='text.primary'
                    href='/MB-net/#/'
                    sx={{ typography: 'h6' }}>
                    Accueil
                </Link>
            </Breadcrumbs>
            <Root>
                <Box p={4} sx={{ backgroundColor: 'background.paper', borderRadius: 8, boxShadow: 3 }}>
                    <Stack direction='column'>
                        <Typography variant='h3' sx={{ color: 'primary.main', fontWeight: 'bold' }}>MB-net</Typography>
                        <Typography py={2} variant='h6'>Je suis Maxime BOURRET, bienvenue sur mon site.</Typography>
                        <Typography py={1} variant='body'>J'ai réalisé ce dernier from scratch avec React et Material UI. Il est hébergé grâce à github pages. Vous pourrez y retrouver les projets sur lesquels j'ai travaillé ainsi que mon CV.</Typography>
                        <Typography pb={3} variant='body'>Je suis à la recherche d'une alternance dans le cadre de ma deuxième année de master à partir de septembre 2023. Durant l'été 2023, je vais effectuer un stage de recherche à l'université de Montréal.</Typography>
                        <Alert variant='outlined' severity='error' sx={{ color: 'text.primary' }}>Le site est en cours de développement</Alert>
                    </Stack>
                </Box>
            </Root>
            <Box p={2}></Box>
        </>
    )
}