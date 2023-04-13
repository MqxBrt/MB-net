import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import {
    styled,
    Card,
    Typography,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    AvatarGroup,
    IconButton,
    Fade,
    Stack
} from '@mui/material';

import PreviewIcon from '@mui/icons-material/Preview';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const ExpandMore = styled(
    (props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    }
)(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardUnit({ Contributors, GitHubRepo, Name, Date, ImageLight, ImageDark, Comment, Description, PreviewURL, Type }) {

    const [expanded, setExpanded] = useState(false);
    const [visible, setVisible] = useState(false);
    const [cookies] = useCookies(['mode']);
    const navigate = useNavigate();
    const handleShareClick = () => {
        //navigator.clipboard.writeText('https://mqxbrt.github.io/MB-net/#/projects/' + PreviewURL);
        navigator.clipboard.writeText('https://mqxbrt.github.io/MB-net/#/projects/');
        setVisible(true);
        setTimeout(() => { setVisible(false); }, 2800);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 550, margin: '0 auto', float: 'none', boxShadow: 3, borderRadius: 3, '&:hover': { boxShadow: 20, borderRadius: 8 } }}>
            <CardHeader
                avatar={
                    <AvatarGroup max={4}>
                        {Contributors.map((index) => (
                            <a href={index[1]} rel='noopener noreferrer' target='_blank' key={index[0]}>
                                {<Avatar alt={index[0]}
                                    src={index[2]} />}
                            </a>
                        ))}
                    </AvatarGroup>
                }
                action={
                    <a href={GitHubRepo} rel='noopener noreferrer' target='_blank'>
                        <IconButton aria-label='repo' sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                            <GitHubIcon />
                        </IconButton>
                    </a>
                }
                title={Name}
                subheader={Date}
            />
            <CardMedia
                component='img'
                height='300'
                image={cookies.mode === 'dark' ? require('../../static/images/projects/' + ImageDark) : require('../../static/images/projects/' + ImageLight)}
                alt='Image not found'
            />
            <CardContent>
                <Stack direction='row' spacing={1} style={{ display: 'flex', alignItems: 'center' }}>
                    {Type == 'school' && <SchoolIcon sx={{ color: 'text.secondary' }} />}
                    {Type == 'personal' && <PersonIcon sx={{ color: 'text.secondary' }} />}
                    <Typography variant='body2' color='text.secondary'>
                        {Comment}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton disabled onClick={() => navigate('/' + PreviewURL)} aria-label='preview' sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                    <PreviewIcon />
                </IconButton>
                <IconButton aria-label='share' onClick={handleShareClick} sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                    <ShareIcon />
                </IconButton>
                <Fade in={visible === true} timeout={400}>
                    <Typography variant='caption' color='primary'>Lien copié !</Typography>
                </Fade>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='showMore'
                    sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {Description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
