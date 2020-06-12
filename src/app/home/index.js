import React, { useState, useEffect } from 'react';

import {
  Button,
  Paper,
  CssBaseline,
  Grid,
  Typography,
  Container,
  Avatar,
  Box,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

import loading from '../../assets/loading.gif';
import { 
  Sobre,
  Contato,
  PrincipaisProjetos,
  Habilidades,
  Educacao,
  Linguas,
  Curriculo,
  OutrosProjetos,
  Experiencia
} from './components';

/* Icones */
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    width: '224px',
    height: '224px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 20,
    marginBottom: 20
  },
}));

export default function Home() {
  const classes = useStyles();
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    async function load() {
      setAvatar(loading);
      const response = await axios.get(`https://api.github.com/users/victorsoares96/repos`);
      setAvatar(response.data[0].owner.avatar_url);
    }
    load();
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Box justifyContent='center' style={{display: 'flex', margin: '30px'}}>
              <Avatar alt="Victor Soares" src={avatar} className={classes.avatar}/>
            </Box>
            <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
              Victor Soares
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Web & Mobile Front-End Developer
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button disableElevation variant="contained" color="primary">
                    PROJETOS
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    CONTATE-ME
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={3} justify="center">
              <Grid item>
              <IconButton href='https://twitter.com/VictorSoares_96'>
                <TwitterIcon/>
              </IconButton>
              <IconButton href='https://linkedin.com/in/victor-soares96'>
                <LinkedInIcon/>
              </IconButton>
              <IconButton href='https://github.com/victorsoares96'>
                <GitHubIcon/>
              </IconButton>
              <IconButton href='https://fb.com/vitor.soares128'>
                <FacebookIcon/>
              </IconButton>
              <IconButton href='http://instagram.com/vitu.soares'>
                <InstagramIcon/>
              </IconButton>
              <IconButton href='https://api.whatsapp.com/send?phone=5585991640770&text=Oi%2C%20queria%20falar%20contigo!'>
                <WhatsAppIcon/>
              </IconButton>
              </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper}>
                <Sobre/>
              </Paper>
              <Paper className={classes.paper}>
                <PrincipaisProjetos/>
              </Paper>
              <Paper className={classes.paper}>
                <OutrosProjetos/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <Contato/>
              </Paper>
              <Paper className={classes.paper}>
                <Habilidades/>
              </Paper>
              <Paper className={classes.paper}>
                <Educacao/>
              </Paper>
              <Paper className={classes.paper}>
                <Linguas/>
              </Paper>
              <Paper className={classes.paper}>
                <Curriculo/>
              </Paper>
              <Paper className={classes.paper}>
                <Experiencia/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper}>Meu GitHub</Paper>
            </Grid>
            {/*
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper}>
                <OutrosProjetos/>
              </Paper>
            </Grid>
            */}
            {/*
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper}>Experiências</Paper>
            </Grid>
            */}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}