import React from 'react';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import {
    Grid,
    MenuItem,
    FormControl,
    Select,
    Stack,
    Typography,
    Breadcrumbs,
    Link
} from '@mui/material';

import SortIcon from '@mui/icons-material/Sort';

import CardUnit from './unit';
import projectsArray from '../../static/data/projects'

export default function Projects() {

    const [sort, setSort] = useState(false);

    let pArray = projectsArray;

    const handleChange = (e) => {
        pArray = pArray.reverse();
        setSort(e.target.value);
    };

    return (
        <>
            <Helmet>
                <title>Projets</title>
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
                    href='/MB-net/#/projects'
                    sx={{ typography: 'h6' }}>
                    Projets
                </Link>
            </Breadcrumbs>
            <Stack direction='row' spacing={1} pl={3}>
                <Stack direction='row' spacing={0.2} pt={2}>
                    <Typography color='text.secondary' variant='subtitle1' pl={2}>Trier par</Typography>
                    <SortIcon sx={{ color: 'text.secondary', paddingTop: 0.3, width: 30 }} />
                </Stack>
                <FormControl sx={{ minWidth: 200, paddingTop: 1.25 }} size='small'>
                    <Select
                        value={sort}
                        onChange={handleChange}
                        autoWidth
                    >
                        <MenuItem value={false}>les plus récents d'abord</MenuItem>
                        <MenuItem value={true}>les plus anciens d'abord</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start' p={2} >
                {pArray.map((index) => (
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index.Name} p={2}>
                        <CardUnit
                            Contributors={index.Contributors}
                            GitHubRepo={index.GitHubRepo}
                            Name={index.Name}
                            Date={index.Date}
                            ImageLight={index.ImageLight}
                            ImageDark={index.ImageDark}
                            Comment={index.Comment}
                            Description={index.Description}
                            PreviewURL={index.PreviewURL}
                            Type={index.Type}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}