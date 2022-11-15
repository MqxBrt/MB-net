import React from 'react';
import { Helmet } from "react-helmet-async";
import {
    Link,
    Breadcrumbs,
    Box,
    Button
} from '@mui/material';

import cv from '../../static/images/resume/CV_fr.png';
import pdf from '../../static/ressources/resume/CV_fr.pdf';

export default function Resume() {
    return (
        <>
            <Helmet>
                <title>CV</title>
            </Helmet>
            <Breadcrumbs pt={4} pb={3} pl={3} pr={4} aria-label='breadcrumb' separator='|' sx={{ typography: 'h6' }}>
                <Link
                    underline='hover'
                    color='text.secondary'
                    href='/MB-net/#/'
                    sx={{ typography: 'h6' }}>
                    Accueil
                </Link>
                <Link
                    underline='hover'
                    color='text.primary'
                    href='/MB-net/#/resume'
                    sx={{ typography: 'h6' }}>
                    CV
                </Link>
            </Breadcrumbs>
            <Box pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant='contained' href={pdf} download='CV_Maxime_BOURRET.pdf'>Télécharger en pdf</Button>
            </Box>
            <Box pb={{ xs: 3, sm: 4, mg: 5, ld: 5, xl: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box component='img' width={{ xs: '80%', sm: '70%', mg: '60%', ld: '60%', xl: '60%' }} alt='CV' src={cv} sx={{ borderRadius: 8, boxShadow: 20 }} />
            </Box>
        </>
    )
}