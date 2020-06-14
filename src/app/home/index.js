import React from 'react';

import {
  Paper,
  CssBaseline,
  Grid,
  Container,
} from '@material-ui/core';

import { useStyles } from './styles';

import { 
  Sobre,
  Contato,
  PrincipaisProjetos,
  Habilidades,
  Educacao,
  Linguas,
  Curriculo,
  OutrosProjetos,
  Experiencia,
  MeuGithub
} from './components';

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper}>
                <Sobre/>
              </Paper>
              <Paper id='projects' className={classes.paper}>
                <PrincipaisProjetos/>
              </Paper>
              <Paper className={classes.paper}>
                <OutrosProjetos/>
              </Paper>
              <Paper className={classes.paper}>
                <MeuGithub/>
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
            {/*
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper}>
                <MeuGithub/>
              </Paper>
            </Grid>
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