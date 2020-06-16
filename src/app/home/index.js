import React from 'react';

import {
  Paper,
  CssBaseline,
  Grid,
  Container,
} from '@material-ui/core';

import { useStyles } from './styles';

import { 
  About,
  Contact,
  MainProjects,
  Skills,
  Education,
  Languages,
  Curriculum,
  OtherProjects,
  Experience,
  MyGithub
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
                <About/>
              </Paper>
              <Paper id='projects' className={classes.paper}>
                <MainProjects/>
              </Paper>
              <Paper className={classes.paper}>
                <OtherProjects/>
              </Paper>
              {/*<Paper className={classes.paper}>
                <MyGithub/>
              </Paper>*/}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <Contact/>
              </Paper>
              <Paper className={classes.paper}>
                <Skills/>
              </Paper>
              <Paper className={classes.paper}>
                <Education/>
              </Paper>
              <Paper className={classes.paper}>
                <Languages/>
              </Paper>
              <Paper className={classes.paper}>
                <Curriculum/>
              </Paper>
              <Paper className={classes.paper}>
                <Experience/>
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