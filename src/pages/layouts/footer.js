import React from 'react';

import {
    Typography,
    Grid,
} from '@mui/material';

export default function Footer() {
    //Footer is the same for all pages
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' py={4} px={1} sx={{ position: 'relative', right: 0, left: 0, bottom: 0, backgroundColor: 'background.paper', boxShadow: 10 }}>
            <Grid item px={3} xs={12} sm={12} md={6} lg={6} xl={6} justifyContent='flex-start' alignItems='center' sx={{ display: 'flex' }}>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Site réalisé avec React et MUI
                </Typography>

            </Grid>

            <Grid item px={3} xs={12} sm={12} md={6} lg={6} xl={6} justifyContent='flex-end' alignItems='center' sx={{ display: 'flex' }}>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Dernière mise à jour le 13 Avril 2023
                </Typography>
            </Grid>
        </Grid>
    )
};
