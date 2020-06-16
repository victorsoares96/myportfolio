import React, { 
  useEffect, 
  useState 
} from 'react';

import {
  AppBar,
  Container,
  Avatar,
  Grid,
  Typography,
  IconButton,
  Button,
  CssBaseline,
  Toolbar,
  Box
} from '@material-ui/core';

/* Config */
import { config } from '../../config';

/* HTTP Client */
import axios from 'axios';

/* Icons */
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

/* Custom components and stylesheet */
import { AvatarProgress } from '../../../styles';
import { useStyles } from './styles';
import { SocialMedias, AboutButton } from './components';

export default function Header({ onChangeTheme, isDark }) {
  const classes = useStyles();
  const { name, programmer, socialMedias, githubUser } = config;
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    async function loadAvatar() {
      const response = await axios.get(`https://api.github.com/users/${githubUser}`);
      setAvatar(response.data.avatar_url);
    }
    loadAvatar();
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.headerColor}>
        <Box flexGrow={1}>
          <AboutButton className={classes.headerColor}/>
        </Box>
        <Box>
          <IconButton aria-label="delete" className={classes.headerColor} onClick={onChangeTheme}>
            {isDark === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <Container maxWidth="sm">
          <Box justifyContent='center' style={{display: 'flex', margin: '30px'}}>
            <Avatar alt={name} src={avatar} className={classes.avatar}>
              {<AvatarProgress size={80}/>}
            </Avatar>
          </Box>
          <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {programmer}
          </Typography>
          <div className={classes.contentButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button href='#projects' disableElevation variant="contained" color="primary">
                  Projects
                </Button>
              </Grid>
              <Grid item>
                <Button href={socialMedias[5].link} variant="outlined" color="primary">
                  Contact-me
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
              <Grid item>
                <SocialMedias data={socialMedias}/>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}