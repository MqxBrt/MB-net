import React from 'react';
import { useLocation } from 'react-router-dom';

import {
    Stack,
    Typography
} from '@mui/material';

function MainpageHeader() {
    return (
        <Stack>
            <Typography sx={{ minHeight: 450, position: 'static', bottom: 0, backgroundColor: 'primary.main' }}>
                Mainpage Header
            </Typography>
        </Stack>
    )
}

function ProjectsHeader() {
    return (
        <Stack>
            <Typography sx={{ minHeight: 100, position: 'static', bottom: 0, backgroundColor: 'primary.main' }}>
                Projects Header
            </Typography>
        </Stack>
    )
}

export default function Header() {
    const location = useLocation().pathname;
    return (
        <>
            { /*Header will be chosen depending on the page currently active*/}
            {location === '/' && <MainpageHeader />}
            {location === '/projects' && <ProjectsHeader />}
        </>
    )
};